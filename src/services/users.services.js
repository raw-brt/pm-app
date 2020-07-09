import Axios from '../config/axios.config';

export const createUser = async (userData) =>  {
  const response = await Axios.post('/api/users/', userData);
  return response;
};

export const authenticateUser = async () => {
  const response = await Axios.get('/api/auth');
  return response;
};

export const login = async (credentials) => {
  const response = await Axios.post('/api/auth', credentials);
  return response;
};