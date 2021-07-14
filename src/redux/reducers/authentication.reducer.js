import { SET_ACCESS_TOKEN, SET_LOGOUT } from "../actions/authentication.action";

const authenticationReducerDefaultState = {
  accessToken: null,
  refreshToken: null,
  isProfileCreated: false,
  profileSection: 1,
};

const authenticationReducer = (
  state = authenticationReducerDefaultState,
  { type, payload }
) => {
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    case SET_LOGOUT:
      return { ...authenticationReducerDefaultState };
    default:
      return state;
  }
};

export default authenticationReducer;
