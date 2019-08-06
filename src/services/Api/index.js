import axios from 'axios';
import config, { handleInterceptorsResponse, handleInterceptorsError } from './config';

const api = axios.create({
  ...config,
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use(
  handleInterceptorsResponse,
  handleInterceptorsError
);


class ApiService {
  setAuthHeader(token) {
    api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  }

  signup(email, password) {
    return api.post('/signup', { email, password });
  }
}


export { api };
export default new ApiService();