import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../api/axiosInstance';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  VERIFY_TOKEN_REQUEST,
  verifyTokenSuccess,
  verifyTokenFailure,
  CHANGE_PASSWORD_REQUEST,
  changePasswordSuccess,
  changePasswordFailure,
  LOGOUT,
  setMessage,
  FORGET_PASSWORD_REQUEST,
  forgetPasswordSuccess,
  forgetPasswordFailure,
  SIGNUP_REQUEST,
  signupSuccess,
  signupFailure,
} from '../actions/authAction';

function* loginSaga(action) {
  try {
    yield call(() => axios.get('/auth/csrf'));
    yield call(() => axios.post('/auth/login', action.payload));
    const verify = yield call(() => axios.get('/auth/verify-token'));
    yield put(loginSuccess(verify.data));
    yield put(setMessage('Login successful'));
  } catch (err) {
    yield put(loginFailure(err?.response?.data || 'Login failed'));
  }
}

function* verifyTokenSaga() {
  try {
    const res = yield call(() => axios.get('/auth/verify-token'));
    yield put(verifyTokenSuccess(res.data));
  } catch (err) {
    yield put(verifyTokenFailure());
  }
}

function* changePasswordSaga(action) {
  try {
    const res = yield call(() => axios.post('/auth/change-password', action.payload));
    yield put(changePasswordSuccess(res.data));
    yield put(setMessage('Password changed successfully'));
  } catch (err) {
    yield put(changePasswordFailure(err?.response?.data || 'Change password failed'));
  }
}

function* logoutSaga() {
  try {
    yield call(() => axios.post('/auth/logout'));
    yield put({ type: LOGOUT });
    yield put(setMessage('Logout successful'));
  } catch (err) {
    yield put(setMessage('Logout failed')); // Fallback
  }
}

function* handleForgetPassword({ payload }) {
  try {
    const response = yield call(axios.post, '/auth/forgot-password', { email: payload });
    yield put(forgetPasswordSuccess(response.data.message || 'Reset link sent successfully'));
  } catch (error) {
    yield put(forgetPasswordFailure(error.response?.data?.message || 'Something went wrong'));
  }
}

function* handleSignup({ payload }) {
  try {
    const response = yield call(axios.post, '/auth/signup', payload);
    yield put(signupSuccess(response.data));
  } catch (error) {
    yield put(signupFailure(error.response?.data?.message || 'Signup failed'));
  }
}


export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(VERIFY_TOKEN_REQUEST, verifyTokenSaga);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(FORGET_PASSWORD_REQUEST, handleForgetPassword);
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
}