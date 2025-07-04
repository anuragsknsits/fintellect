export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const VERIFY_TOKEN_REQUEST = 'VERIFY_TOKEN_REQUEST';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE';

export const LOGOUT = 'LOGOUT';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

// Action Types
export const FORGET_PASSWORD_REQUEST = 'FORGET_PASSWORD_REQUEST';
export const FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
export const FORGET_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE';

// Action Creators
export const forgetPasswordRequest = (email) => ({
  type: FORGET_PASSWORD_REQUEST,
  payload: email,
});

export const forgetPasswordSuccess = (message) => ({
  type: FORGET_PASSWORD_SUCCESS,
  payload: message,
});

export const forgetPasswordFailure = (error) => ({
  type: FORGET_PASSWORD_FAILURE,
  payload: error,
});


export const loginRequest = (payload) => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

export const verifyTokenRequest = () => ({ type: VERIFY_TOKEN_REQUEST });
export const verifyTokenSuccess = (user) => ({ type: VERIFY_TOKEN_SUCCESS, user });
export const verifyTokenFailure = () => ({ type: VERIFY_TOKEN_FAILURE });

export const logout = () => ({ type: LOGOUT });

export const changePasswordRequest = (payload) => ({ type: CHANGE_PASSWORD_REQUEST, payload });
export const changePasswordSuccess = (message) => ({ type: CHANGE_PASSWORD_SUCCESS, message });
export const changePasswordFailure = (error) => ({ type: CHANGE_PASSWORD_FAILURE, error });

export const setMessage = (message) => ({ type: SET_MESSAGE, message });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });

export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
