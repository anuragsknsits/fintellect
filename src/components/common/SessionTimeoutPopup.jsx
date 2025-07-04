import React from 'react';
import { useDispatch } from 'react-redux';
import { hideSessionTimeoutPopup } from '../../redux/actions/sessionActions';
import { verifyTokenRequest } from './../../redux/actions/authAction';

const SessionTimeoutPopup = () => {
  const dispatch = useDispatch();

  const extendSession = () => {
    dispatch(hideSessionTimeoutPopup());
    dispatch(verifyTokenRequest());
  };

  const logoutNow = () => {
    dispatch(hideSessionTimeoutPopup());
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Session Expiring</h2>
        <p className="mb-4">Your session is about to expire. Would you like to extend it?</p>
        <div className="flex justify-end gap-4">
          <button onClick={extendSession} className="bg-green-500 text-white px-4 py-2 rounded">Extend</button>
          <button onClick={logoutNow} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutPopup;