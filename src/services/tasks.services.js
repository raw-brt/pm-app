import Axios from '../config/axios.config';

export const createTaskService = async (newTask) => {
  const response = await Axios.post('/api/tasks', newTask);
  return response;
};

export const getSelectedProjectTasks = async (project) => {
  const response = await Axios.get(`/api/tasks/`, { params: { project } });
  return response;
};

export const updateTaskService = async (task) => {
  const response = await Axios.put(`/api/tasks/${task._id}`, task);
  return response;
};

export const deleteTaskService = async (taskId, projectId) => {
  await Axios.delete(`/api/tasks/${taskId}`, { params: { projectId } });
};