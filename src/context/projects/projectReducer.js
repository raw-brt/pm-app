import { TOGGLE_PROJECT_FORM } from '../../types';

export default (state, action) => {
  switch(action.type) {
    case TOGGLE_PROJECT_FORM:
      return {
        ...state,
        newProjectForm: true
      }
    default:
      return state;
  }
}