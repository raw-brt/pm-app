import React, { useState, useContext, Fragment } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const {
    newProjectForm,
    formError,
    toggleForm,
    addProject,
    handleFormError
  } = projectsContext;
  const [project, setProject] = useState({ name: "" });

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const { name } = project;

  const handleSubmit = (event) => {
    event.preventDefault();   // Avoid sending an empty input field
    if (name === "") {        // Form validation
      handleFormError(); 
      return;
      };  
    addProject(project);      // Update project state, passing the action
    setProject({ name: "" }); // Reset form
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => toggleForm()}
      >
        Create project
      </button>

      {newProjectForm 
        ? 
          (
            <form 
              className="formulario-nuevo-proyecto" 
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Project name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Create new project"
              />
            </form>
          ) 
        : null
      }
      {formError 
        ? <p className='mensaje error'>Project name required</p>
        : null
      }
    </Fragment>
  );
};

export default NewProject;
