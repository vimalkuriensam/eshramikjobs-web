import { SET_ACCESS_TOKEN } from "../actions/authentication.action";

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
    default:
      return state;
  }
};

export default authenticationReducer;
