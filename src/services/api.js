import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:5000/lessons/'
});

api.interceptors.request.use( async config => {
  const token = getToken();
  
  if(token) {
    config.headers.Authorization = token
  }

  return config;
})

export default api;