import React, { useState, Fragment } from 'react';

const NewProject = () => {
  const [projectName, setProjectName] = useState({projectName: ''});

  const handleChange = event => {
    setProjectName({
      ...projectName,
      [event.target.name]: event.target.name
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Form validation

    // Pass to action
  }


  return (
    <Fragment> 
      <button
        type='button'
        className='btn btn-block btn-primario'
      >Create project</button>
      <form
        className='formulario-nuevo-proyecto'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='input-text'
          placeholder='Project name'
          name='name'
          value={projectName.name}
          onChange={handleChange}
        />
        <input
          type='submit'
          className='btn btn-primario btn-block'
          value='Create new project'
        />
      </form>
    </Fragment>
   );
}
 
export default NewProject;