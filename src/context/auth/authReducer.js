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
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        message: null,
        loading: false
      }
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        loading: false,
        message: action.payload
      }
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    default:
      return state;
  };
};