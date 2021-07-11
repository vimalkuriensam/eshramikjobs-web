import { SET_LOADER_STATE, SET_LOGIN_STATE } from "../actions/utils.action";

const utilsReducerDefaultState = {
  loginState: false,
  loaderState: false,
};

const utilsReducer = (state = utilsReducerDefaultState, { type, value }) => {
  switch (type) {
    case SET_LOGIN_STATE:
      return { ...state, loginState: value };
    case SET_LOADER_STATE:
      return { ...state, loaderState: value };
    default:
      return state;
  }
};

export default utilsReducer;
