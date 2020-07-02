import {
  GET_PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case GET_PROJECT_TASKS:
      return {
        ...state,
        selectedProjectTasks: state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
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
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      return state;
  };
};