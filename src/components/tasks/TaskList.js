import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {
  const projectTasks = [
    {id: 1, name: 'Choose platform', status: true },
    {id: 2, name: 'Wireframes', status: true },
    {id: 3, name: 'Mockups', status: false },
    {id: 4, name: 'First version', status: false }
  ]

  return (
    <Fragment> 
      <h2>Project: </h2>
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
   );
}
 
export default TaskList;