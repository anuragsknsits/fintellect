import axios from 'axios';
import { store } from '../redux/store';
import { logout, verifyTokenRequest } from '../redux/actions/authActions';
import { showSessionTimeoutPopup } from '../redux/actions/sessionActions';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const csrfToken = state.auth?.csrf;

    if (csrfToken && ['post', 'put', 'delete', 'patch'].includes(config.method)) {
      config.headers['X-XSRF-TOKEN'] = csrfToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (response?.status === 401 && !config._retry) {
      config._retry = true;
      try {
        store.dispatch(showSessionTimeoutPopup());
        await store.dispatch(verifyTokenRequest());
        return axiosInstance(config);
      } catch (err) {
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
