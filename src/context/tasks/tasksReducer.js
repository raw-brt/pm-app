import {
  GET_PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
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
        selectedProjectTasks: [...state.selectedProjectTasks, action.payload],
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
        selectedProjectTasks: state.selectedProjectTasks.filter(task => task.id !== action.payload),
        selectedTask: null
      }
    case TASK_STATUS:
    case UPDATE_TASK:
      return {
        ...state,
        selectedProjectTasks: state.selectedProjectTasks.map(task => task.id === action.payload.id ? action.payload : task)
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