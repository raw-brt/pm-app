import Axios from '../config/axios.config';

export const registerUser = async (userData) =>  {
  const response = await Axios.post('/api/users/', userData);
  return response;
};