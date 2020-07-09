import React, { useContext } from 'react';
import tasksContext from '../../context/tasks/tasksContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const taskContext = useContext(tasksContext);
  const { deleteTask, getProjectTasks, updateTask, setSelectedTask } = taskContext;

  const removeTask = taskId => {
    deleteTask(taskId, actualProject[0]._id);
    getProjectTasks(actualProject[0]._id);
  };

  const handleStatusChange = task => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    updateTask(task);
  }

  const handleSelectTask = task => {
    setSelectedTask(task);
  };

  return ( 
    <li className='tarea sombra'>
      <p>{task.name}</p>
      <div className='estado'>
        { task.status
            ? 
              (
                <button
                  type='button'
                  className='completo'
                  onClick={() => handleStatusChange(task)}
                >
                  Done
                </button>
              )
            : 
              (
                <button
                  type='button'
                  className='incompleto'
                  onClick={() => handleStatusChange(task)}
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
          onClick={() => handleSelectTask(task)}
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-secundario'
          onClick={() => removeTask(task._id)}        
        >
          Delete
        </button>
      </div>
    </li>
   );
}
 
export default Task;