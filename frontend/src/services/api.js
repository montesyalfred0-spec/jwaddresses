import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
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
