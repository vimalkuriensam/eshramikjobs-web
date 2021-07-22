import {
  SET_ACCESS_TOKEN,
  SET_EMAIL,
  SET_LOGOUT,
} from "../actions/authentication.action";

const authenticationReducerDefaultState = {
  accessToken: null,
  refreshToken: null,
  isProfileCreated: false,
  profileSection: 1,
  email: "",
};

const authenticationReducer = (
  state = authenticationReducerDefaultState,
  { type, payload, email }
) => {
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case SET_LOGOUT:
      return { ...authenticationReducerDefaultState };
    case SET_EMAIL:
      return { ...state, email };
    default:
      return state;
  }
};

export default authenticationReducer;
