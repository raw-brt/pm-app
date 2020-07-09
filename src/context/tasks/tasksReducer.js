import {
  GET_PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  SELECTED_TASK,
  UPDATE_TASK
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case GET_PROJECT_TASKS:
      return {
        ...state,
        selectedProjectTasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        selectedProjectTasks: [action.payload, ...state.selectedProjectTasks],
        taskError: false
      }
    case VALIDATE_TASK:
      return {
        ...state,
        taskError: true
      }
    case DELETE_TASK:
      return {
        ...state,
        selectedProjectTasks: state.selectedProjectTasks.filter(task => task._id !== action.payload),
        selectedTask: null
      }
    case UPDATE_TASK:
      return {
        ...state,
        selectedProjectTasks: state.selectedProjectTasks.map(task => task._id === action.payload._id ? action.payload : task)
      }
    case SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload
      }
    default:
      return state;
  };
};