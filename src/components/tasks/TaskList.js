import React, { useContext, Fragment } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const projectTasks = [
    {id: 1, name: 'Choose platform', status: true },
    {id: 2, name: 'Wireframes', status: true },
    {id: 3, name: 'Mockups', status: false },
    {id: 4, name: 'First version', status: false }
  ];

  return (
    <Fragment> 
        {actualProject === null
          ? <h2>No project selected</h2>
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