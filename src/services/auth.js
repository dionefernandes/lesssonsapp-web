import axios from 'axios';

const apiUrl = 'http://localhost:5000/';

const authService = {
  
  async authenticate(username, password) {
    const checkServer = await this.checkServer();

    if(checkServer) {
      const authEndpoint = `${apiUrl}lessons/auth`;
      const response = await axios.post(authEndpoint, { username, password });
      
      return response.data.createdToken;
    }

    return { message: 'Server is not available.' };
  },

  async tokenValidate(token) {
    const checkServer = await this.checkServer();

    if(checkServer) {
      const validateEndpoint = `${apiUrl}lessons/tokenValidate`;
  
      const validateResponse = await axios.post(validateEndpoint, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
  
      if (validateResponse.status !== 200) {
        return { message: 'Invalid token.' };
      }
  
      return true;
    }

    return { message: 'Server is not available.' };
  },

  async checkServer() {
    let num = 0;

    try {
      const response = await axios.get(`${apiUrl}lessons/serverOnline`);
      
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      if(num < 3) {
        setTimeout(async () => {
          await this.checkServer();
        }, 2000);
      } else {
        return false;
      }
    }
   },

  setLogged(username, token) {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    } catch(error) {
      return { message: 'Unable to register login details.' };
    }
  },

  getLogged() {
    try {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      
      const dataLogged = {
        token: token,
        username: username
      }
  
      return dataLogged;
    } catch(error) {
      return { message: 'Unable to retrieve login details.' };
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  },
}

export default authService;