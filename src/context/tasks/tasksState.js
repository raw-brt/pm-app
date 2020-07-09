import React, { useReducer } from "react";
import tasksContext from "./tasksContext";
import tasksReducer from "./tasksReducer";
import {
  GET_PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  SELECTED_TASK,
  UPDATE_TASK
} from "../../types";
import { createTaskService, getSelectedProjectTasks, deleteTaskService, updateTaskService } from "../../services/tasks.services";

const TasksState = (props) => {
  const initialState = {
    selectedProjectTasks: [],
    selectedTask: null,
    taskError: false
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getProjectTasks = async (project) => {
    try {
      const apiResponseGetProjectTasks = await getSelectedProjectTasks(project);
      dispatch({
        type: GET_PROJECT_TASKS,
        payload: apiResponseGetProjectTasks.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const apiResponse = createTaskService(newTask);
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

  const deleteTask = async (taskId, projectId) => {
    try {
      await deleteTaskService(taskId, projectId);
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      });
    } catch (error) {
      console.log(error);
    };
  };

  const updateTask = async (task) => {
    try {
      const updateTaskResponse = await updateTaskService(task);
      dispatch({
        type: UPDATE_TASK,
        payload: updateTaskResponse.data.updatedTask
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setSelectedTask = (task) => {
    dispatch({
      type: SELECTED_TASK,
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
        setSelectedTask,
        updateTask
      }}
    >
      {props.children}
    </tasksContext.Provider>
  );
};

export default TasksState;
