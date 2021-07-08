import { SET_LOGIN_STATE } from "../actions/utils.action";

const utilsReducerDefaultState = {
  loginState: false,
  loaderState: false,
};

const utilsReducer = (state = utilsReducerDefaultState, { type, value }) => {
  switch (type) {
    case SET_LOGIN_STATE:
      return { ...state, loginState: value };
    default:
      return state;
  }
};

export default utilsReducer;
