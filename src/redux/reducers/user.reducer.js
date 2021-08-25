import { SET_BASIC_PROFILE } from "../actions/user.actions";

const userReducerDefaultState = {
  basic: {},
};

const userReducer = (state = userReducerDefaultState, { type, profile }) => {
  switch (type) {
    case SET_BASIC_PROFILE:
      return { ...state, basic: profile };
    default:
      return state;
  }
};

export default userReducer;
