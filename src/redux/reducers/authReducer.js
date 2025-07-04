import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_TOKEN_REQUEST,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAILURE,
  LOGOUT,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
} from '../actions/authAction'

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  jwt: null, // optional with HttpOnly cookie-based auth
  csrf: null, // store CSRF token from backend cookie/header
  message: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case VERIFY_TOKEN_REQUEST:
    case CHANGE_PASSWORD_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.user,
        jwt: action.user.jwt || null,
        csrf: action.user.csrf || null,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        jwt: null,
        csrf: null,
        error: action.error,
      };

    case VERIFY_TOKEN_FAILURE:
    case LOGOUT:
      return {
        ...initialState,
        message: action.message || 'Logged out successfully',
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message,
        error: null,
      };

    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        error: action.error,
      };

    case SET_MESSAGE:
      return { ...state, message: action.message };

    case CLEAR_MESSAGE:
      return { ...state, message: null, error: null };
    case FORGET_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        successMessage: action.payload,
      };

    case FORGET_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
