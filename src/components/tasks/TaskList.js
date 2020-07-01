import React, { useContext, Fragment } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const { actualProject, deleteProject } = projectsContext;

  if (!actualProject) return <h2>Select a project</h2>;
  const [project] = actualProject;

  const projectTasks = [
    {id: 1, name: 'Choose platform', status: true },
    {id: 2, name: 'Wireframes', status: true },
    {id: 3, name: 'Mockups', status: false },
    {id: 4, name: 'First version', status: false }
  ];

  const handleDeleteProject = () => {
    deleteProject(project.id);
  };

  return (
    <Fragment> 
        {actualProject === null
          ? <h2>Select one project in the sidebar</h2>
          : (
              <Fragment>
                <h2>{actualProject[0].name}</h2>
                <ul className='listado-tareas'>
                  {projectTasks.length > 0
                    ? projectTasks.map(task => (<Task task={task} />))
                    : (<li className='tarea'>There are no tasks for this project</li>)
                  }
                </ul>
                <button
                  type='button'
                  className='btn btn-eliminar'
                  onClick={() => handleDeleteProject()}
                >
                  Delete project &times;
                </button>
              </Fragment>
            )
        }
    </Fragment>
   );
}
 
export default TaskList;