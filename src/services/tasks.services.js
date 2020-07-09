import Axios from '../config/axios.config';

export const createTaskService = async (newTask) => {
  const response = await Axios.post('/api/tasks', newTask);
  return response;
};

export const getSelectedProjectTasks = async (project) => {
  const response = await Axios.get(`/api/tasks/`, { params: { project } });
  return response;
};