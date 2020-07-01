import React from 'react';

const Task = ({ task }) => {
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
        >
          Delete
        </button>
      </div>
    </li>
   );
}
 
export default Task;