import {
  CLEAR_CANDIDATES,
  SET_CANDIDATES,
  SET_COMPANY_INFO,
} from "../actions/recruit.action";

const recruiterReducerDefaultState = {
  name: null,
  logo: null,
  candidates: [],
};

const recruiterReducer = (
  state = recruiterReducerDefaultState,
  { type, name = null, logo = null, candidates = [] }
) => {
  switch (type) {
    case SET_COMPANY_INFO:
      return { ...state, name, logo };
    case SET_CANDIDATES:
      return { ...state, candidates };
    case CLEAR_CANDIDATES:
      return { ...state, candidates: [] };
    default:
      return state;
  }
};

export default recruiterReducer;
