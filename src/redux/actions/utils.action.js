export const SET_LOGIN_STATE = "SET_LOGIN_STATE";
export const SET_LOADER_STATE = "SET_LOADER_STATE";

export const loginState = ({ state }) => ({
  type: SET_LOGIN_STATE,
  value: state,
});

export const setLoader = ({ state }) => ({
  type: SET_LOADER_STATE,
  value: state,
});
