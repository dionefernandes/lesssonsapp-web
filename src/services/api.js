import axios from 'axios';
import authService from './auth';

const apiUrl = 'http://localhost:5000/lessons/';

const api = {
  async lessonsAll() {
    const { token } = authService.getLogged();

    return axios.get(apiUrl, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async lessonById(id) {
    const endpoint = `${apiUrl}${id}`;
    const { token } = authService.getLogged();

    return axios.get(endpoint, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async lessonByTitle(title) {
    const endpoint = `${apiUrl}title/${title}`;
    const { token } = authService.getLogged();

    return axios.get(endpoint, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async createLesson(data) {
    const { token } = authService.getLogged();

    return axios.post(apiUrl, data, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async updateLesson(data, id) {
    const endpoint = `${apiUrl}${id}`;
    const { token } = authService.getLogged();

    return axios.put(endpoint, data, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async deleteLesson(id) {
    const endpoint = `${apiUrl}${id}`;
    const { token } = authService.getLogged();

    return axios.delete(endpoint, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async expiredTokens() {
    const endpoint = `${apiUrl}expiredTokens`;
    const { token } = authService.getLogged();
    const tokenBody = {
      token: token
    };

    return axios.post(endpoint, tokenBody, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },

  async isTokenValid() {
    const endpoint = `${apiUrl}isTokenValid`;
    const { token } = authService.getLogged();
    const tokenBody = {
      token: token
    };

    return axios.post(endpoint, tokenBody, {
      headers : {Authorization : `Bearer ${token}`}
    });
  },
}

export default api;