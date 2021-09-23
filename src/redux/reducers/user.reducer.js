import {
  ADD_RESUME,
  CLEAR_PROFILE,
  CLEAR_RESUME,
  SET_BASIC_PROFILE,
  SET_PROFILE_EDUCATION,
  SET_PROFILE_EMPLOYMENT,
  SET_PROFILE_INFO,
  SET_PROFILE_PROFESSION,
  SET_PROFILE_SKILLS,
} from "../actions/user.actions";

const userReducerDefaultState = {
  basic: {},
  profile: {
    info: {},
    education: [],
    profession: [],
    skills: [],
    employment: [],
  },
  resume: {},
};

const userReducer = (
  state = userReducerDefaultState,
  { type, profile, resume }
) => {
  switch (type) {
    case SET_BASIC_PROFILE:
      return { ...state, basic: profile };
    case SET_PROFILE_INFO:
      return { ...state, profile: { ...state.profile, info: profile[0] } };
    case SET_PROFILE_EDUCATION:
      return { ...state, profile: { ...state.profile, education: profile[0] } };
    case SET_PROFILE_PROFESSION:
      return {
        ...state,
        profile: { ...state.profile, profession: profile[0] },
      };
    case SET_PROFILE_SKILLS:
      return { ...state, profile: { ...state.profile, skills: profile[0] } };
    case SET_PROFILE_EMPLOYMENT:
      return { ...state, profile: { ...state.profile, employment: profile } };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: JSON.parse(JSON.stringify(userReducerDefaultState.profile)),
      };
    case ADD_RESUME:
      return {
        ...state,
        resume,
      };
    case CLEAR_RESUME:
      return { ...state, resume: {} };
    default:
      return state;
  }
};

export default userReducer;
