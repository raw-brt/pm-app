import Axios from '../config/axios.config';

export const createProject = async (projectData) => {
  const response = Axios.post('/api/projects', projectData);
  return response;
};

export const getUserProjects = async () => {
  const response = Axios.get('/api/projects');
  return response;
};

export const deleteProject = async (projectId) => {
  const response = Axios.delete(`/api/projects/${projectId}`);
  return response;
};