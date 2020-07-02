import React, { useContext } from 'react';
import tasksContext from '../../context/tasks/tasksContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const taskContext = useContext(tasksContext);
  const { deleteTask, getProjectTasks } = taskContext;

  const removeTask = taskId => {
    deleteTask(taskId);
    getProjectTasks(actualProject[0].id);
  };

  return ( 
    <li className='tarea sombre'>
      <p>{task.name}</p>
      <div className='estado'>
        { task.status
            ? 
              (
                <button
                  type='button'
                  className='completo'
                >
                  Done
                </button>
              )
            : 
              (
                <button
                  type='button'
                  className='incompleto'
                >
                  In progress
                </button>
              )
        }
      </div>
      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-secundario'
          onClick={() => removeTask(task.id)}        
        >
          Delete
        </button>
      </div>
    </li>
   );
}
 
export default Task;