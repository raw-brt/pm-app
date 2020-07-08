import React, { useReducer } from "react";
import tasksContext from "./tasksContext";
import tasksReducer from "./tasksReducer";
import {
  GET_PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  SELECTED_TASK,
  UPDATE_TASK
} from "../../types";
import { createTaskService, getSelectedProjectTasks } from "../../services/tasks.services";

const TasksState = (props) => {
  const initialState = {
    selectedProjectTasks: [],
    selectedTask: null,
    taskError: false,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getProjectTasks = async (project) => {
    try {
      const apiResponseGetProjectTasks = await getSelectedProjectTasks(project);
      console.log(project)
      dispatch({
        type: GET_PROJECT_TASKS,
        payload: apiResponseGetProjectTasks.data.tasks
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const apiResponse = createTaskService(newTask);
      console.log(apiResponse)
      dispatch({
        type: ADD_TASK,
        payload: apiResponse
      });
    } catch (error) {
      console.log(error)
    }
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    });
  };

  const changeTaskStatus = (task) => {
    dispatch({
      type: TASK_STATUS,
      payload: task
    });
  };

  const setSelectedTask = (task) => {
    dispatch({
      type: SELECTED_TASK,
      payload: task
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    });
  };

  return (
    <tasksContext.Provider
      value={{
        selectedProjectTasks: state.selectedProjectTasks,
        taskError: state.taskError,
        selectedTask : state.selectedTask,
        getProjectTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus,
        setSelectedTask,
        updateTask
      }}
    >
      {props.children}
    </tasksContext.Provider>
  );
};

export default TasksState;
