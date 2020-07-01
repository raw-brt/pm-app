import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({
    name: ''
  });

  const { name } = task;

  const handleChange = event => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return ( 
    <div className='formulario'>
      <form
        onSubmit={handleSubmit}
      >
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Task name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value='Add task'
          />
        </div>
      </form>
    </div>
   );
}
 
export default TaskForm;