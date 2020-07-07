import {
   SIGNUP_SUCCESS,
   SIGNUP_ERROR,
   LOGIN_SUCCESS,
   LOGIN_ERROR,
   LOGOUT,
   GET_USER
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        message: null
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        token: null,
        message: action.payload
      }
    default:
      return state;
  };
};