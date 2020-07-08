import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER
} from '../../types';
import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import { createUser, authenticateUser, login } from '../../services/users.services';
import tokenAuth from '../../config/auth.token.config';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null,
    loading: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleUserRegistration = async (userData) => {
    try {
      const apiResponse = await createUser(userData);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: apiResponse.data
      });
      handleAuthenticateUser();
    } catch (error) {
      const alert = { message: error.response.data.msg, category: 'alerta-error' }
      dispatch({
        type: SIGNUP_ERROR,
        payload: alert
      });
    };
  };

  const handleAuthenticateUser = async () => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      tokenAuth(authToken);
    };
    try {
      const authApiResponse = await authenticateUser();
      dispatch({
        type: GET_USER,
        payload: authApiResponse.data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR
      });
    };
  };

  const handleLogin = async (credentials) => {
    try {
      const loginApiResponse = await login(credentials);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginApiResponse.data
      });
      handleAuthenticateUser();
    } catch (error) {
      console.log(error);
      const alert = { message: error.response.data.msg, category: 'alerta-error' };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      });
    };
  };

  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        handleUserRegistration,
        handleLogin,
        handleLogout,
        handleAuthenticateUser
      }}
    >
      {props.children}
    </authContext.Provider>
    );
};

export default AuthState;