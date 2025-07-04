import { SHOW_SESSION_POPUP, HIDE_SESSION_POPUP } from '../actions/sessionActions';

const initialState = {
  showPopup: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SESSION_POPUP:
      return { ...state, showPopup: true };
    case HIDE_SESSION_POPUP:
      return { ...state, showPopup: false };
    default:
      return state;
  }
};

export default sessionReducer;
