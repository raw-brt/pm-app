import {
  TOGGLE_PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_PROJECT_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_PROJECT_FORM:
      return {
        ...state,
        newProjectForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        newProjectForm: false,
        formError: false
      };
    case VALIDATE_PROJECT_FORM:
      return {
        ...state,
        formError: true
      }
    case ACTUAL_PROJECT:
      return {
        ...state,
        actualProject: state.projects.filter(project => project._id === action.payload)
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== action.payload),
        actualProject: null
      };
    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
