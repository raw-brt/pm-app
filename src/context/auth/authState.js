import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER
} from '../../types';
import React, { useReducer } from 'react';
import axiosClient from '../../config/axios.config';
import authReducer from './authReducer';
import authContext from './authContext';
import { registerUser } from '../../services/users.services';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleUserRegistration = async (userData) => {
    try {
      const apiResponse = await registerUser(userData);
      console.log(apiResponse);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: apiResponse.data
      });
    } catch (error) {
      const alert = { message: error.response.data.msg, category: 'alerta-error' }
      dispatch({
        type: SIGNUP_ERROR,
        payload: alert
      });
    };
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        message: state.message,
        handleUserRegistration: handleUserRegistration
      }}
    >
      {props.children}
    </authContext.Provider>
    );
};

export default AuthState;