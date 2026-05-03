import axios from 'axios';

const getBaseURL = () => {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return '/api';
  }
  return `http://${hostname}:3000/api`;
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true
});

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  me: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout')
};

export const territoryAPI = {
  getTerritories: () => api.get('/territories'),
};

export const addressAPI = {
  getAddresses: (neighborhoodId) => api.get(`/addresses/neighborhood/${neighborhoodId}`),
  createAddress: (data) => api.post('/addresses', data),
};

export default api;
