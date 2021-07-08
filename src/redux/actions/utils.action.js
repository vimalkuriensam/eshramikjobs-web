export const SET_LOGIN_STATE = "SET_LOGIN_STATE";

export const loginState = ({ state }) => ({
  type: SET_LOGIN_STATE,
  value: state,
});
