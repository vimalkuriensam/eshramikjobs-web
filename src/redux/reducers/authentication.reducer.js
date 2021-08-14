import {
  SET_ACCESS_TOKEN,
  SET_EMAIL,
  SET_LOGOUT,
  SET_VERIFICATION,
} from "../actions/authentication.action";

const authenticationReducerDefaultState = {
  accessToken: null,
  refreshToken: null,
  verified: null,
  isProfileCreated: false,
  profileSection: 1,
  email: "",
};

const authenticationReducer = (
  state = authenticationReducerDefaultState,
  { type, email, tokens, id }
) => {
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: tokens.accessToken,
        ...(tokens?.refreshToken && {
          refreshToken: tokens.refreshToken,
        }),
        ...(tokens?.verified && {
          verified: tokens.verified,
        }),
      };
    case SET_LOGOUT:
      return { ...authenticationReducerDefaultState };
    case SET_EMAIL:
      return { ...state, email };
    case SET_VERIFICATION:
      return { ...state, verified: id };
    default:
      return state;
  }
};

export default authenticationReducer;
