import { actions } from '../actions';

export const INITIAL_STATE = {
  isLogin: false,
};

const authReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actions.auth.setLogin:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

export const onSetLoginStatus = (data) => ({
  type: actions.auth.setLogin,
  payload: data,
});
