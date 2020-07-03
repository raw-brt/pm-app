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

const TasksState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", status: true, projectId: 1 },
      { id: 2, name: "Wireframes", status: true, projectId: 2 },
      { id: 3, name: "Mockups", status: false, projectId: 3 },
      { id: 4, name: "First version", status: false, projectId: 4 },
      { id: 5, name: "Choose platform", status: true, projectId: 1 },
      { id: 6, name: "Wireframes", status: true, projectId: 2 },
      { id: 7, name: "Mockups", status: false, projectId: 3 },
      { id: 8, name: "Choose platform", status: true, projectId: 4 },
      { id: 9, name: "Wireframes", status: true, projectId: 1 },
      { id: 10, name: "Mockups", status: false, projectId: 2 },
    ],
    selectedProjectTasks: null,
    selectedTask: null,
    taskError: false,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getProjectTasks = (projectId) => {
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: projectId
    });
  };

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
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
        tasks: state.tasks,
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
