import axios from 'axios';
import config from '../config/env';

const axiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const csrfToken = localStorage.getItem('XSRF-TOKEN');
  if (csrfToken) req.headers['X-XSRF-TOKEN'] = csrfToken;
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    // Log or show toast error here
    return Promise.reject(err);
  }
);

export default axiosInstance;
