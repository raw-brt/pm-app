import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  TOGGLE_PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_PROJECT_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
} from "../../types";
import { v4 as uuid } from "uuid";

const ProjectState = (props) => {
  const projects = [                        // Dummy content to test
    { id: 1, name: "Ecommerce" },
    { id: 2, name: "Log and ROI" },
    { id: 3, name: "Tesla Cybertruck" },
  ];

  const initialState = {
    newProjectForm: false, // Controls visibility of New Project form
    formError: false,
    projects: [],
    actualProject: null
  };

  // Dispatch to execute actions that modify the state
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to execute project related actions
  const toggleForm = () => {   // Show 'create new project' form
    dispatch({
      type: TOGGLE_PROJECT_FORM,
    });
  };

  const getProjects = () => {  // Get existing projects
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {   // Add new project
    project.id = uuid();              // Add unique ID to the project
    dispatch({                        // Insert project in the state
      type: ADD_PROJECT,              // Indicate action
      payload: project,               // Pass as payload the project created in the component
    });
  };

  const handleFormError = () => {     // Handle form validation
    dispatch({
      type: VALIDATE_PROJECT_FORM
    });
  };

  const handleActualProject = projectId => {    // Handle selected project
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId
    });
  };

  const deleteProject = projectId => {    // Delete project
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    });
  };

  return (
    <projectContext.Provider
      value={{
        // State variables
        newProjectForm: state.newProjectForm,
        projects: state.projects,
        formError: state.formError,
        actualProject: state.actualProject,
        // Functions
        toggleForm,
        getProjects,
        addProject,
        handleFormError,
        handleActualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
