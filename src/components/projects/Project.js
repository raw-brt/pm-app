import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/tasksContext';

const Project = ({ project }) => {
  console.log(project)
  const projectsContext = useContext(projectContext);
  const { handleActualProject } = projectsContext;
  
  const taskContext = useContext(tasksContext);
  const { getProjectTasks } = taskContext;

  const getProjectData = projectId => {
    handleActualProject(projectId); // Select actual project
    getProjectTasks(projectId);     // Get selected project tasks
  };

  return ( 
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => getProjectData(project._id)}
      >
        {project.name}
      </button>
    </li>
   );
}
 
export default Project;