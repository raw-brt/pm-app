// Project actions that imply project state changes
export const TOGGLE_PROJECT_FORM = 'TOGGLE_PROJECT_FORM';
export const GET_PROJECTS = 'GET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const VALIDATE_PROJECT_FORM = 'VALIDATE_PROJECT_FORM';
export const ACTUAL_PROJECT = 'ACTUAL_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const PROJECT_ERROR = 'PROJECT_ERROR';

// Task actions that imply task state changes
export const GET_PROJECT_TASKS = 'GET_PROJECT_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const VALIDATE_TASK = 'VALIDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TASK_STATUS = 'TASK_STATUS';
export const SELECTED_TASK = 'SELECTED_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Alerts
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

// User
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const GET_USER = 'GET_USER';