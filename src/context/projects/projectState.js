import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { TOGGLE_PROJECT_FORM } from '../../types';

const ProjectState = props => {
  const initialState = {
    newProjectForm: false // Controls visibility of New Project form
  }
  
  // Dispatch to execute actions that modify the state
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions to execute project related actions
  const toggleForm = () => {
    dispatch({
      type: TOGGLE_PROJECT_FORM
    })
  }

  return (
    <projectContext.Provider
      value={{
        newProjectForm: state.newProjectForm,
        toggleForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
};

export default ProjectState;