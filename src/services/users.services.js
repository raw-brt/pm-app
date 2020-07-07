import Axios from '../config/axios.config';

export const registerUser = async (userData) =>  {
  console.log('Register user service called')
  const response = await Axios.post('/api/users/', userData);
  return response;
};