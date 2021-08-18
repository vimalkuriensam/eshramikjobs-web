import {
  CLEAR_CANDIDATES,
  CLEAR_CURRENT_PLAN,
  SET_CANDIDATES,
  SET_COMPANY_INFO,
  SET_CURRENT_PLAN,
} from "../actions/recruit.action";

const recruiterReducerDefaultState = {
  name: null,
  logo: null,
  candidates: [],
  plan: {},
};

const recruiterReducer = (
  state = recruiterReducerDefaultState,
  { type, name = null, logo = null, candidates = [], plan = {} }
) => {
  switch (type) {
    case SET_COMPANY_INFO:
      return { ...state, name, logo };
    case SET_CANDIDATES:
      return { ...state, candidates };
    case CLEAR_CANDIDATES:
      return { ...state, candidates: [] };
    case SET_CURRENT_PLAN:
      return { ...state, plan };
    case CLEAR_CURRENT_PLAN:
      return { ...state, plan: {} };
    default:
      return state;
  }
};

export default recruiterReducer;
