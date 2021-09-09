import {
  CLEAR_CANDIDATES,
  CLEAR_CURRENT_PLAN,
  SET_APPLICATION_LENGTH,
  SET_APPLICATION_PAGE,
  SET_CANDIDATES,
  SET_COMPANY_INFO,
  SET_CURRENT_PLAN,
} from "../actions/recruit.action";

const recruiterReducerDefaultState = {
  name: null,
  logo: null,
  candidates: [],
  plan: {},
  pages: {
    applicationTotal: 0,
    applicationPage: 0,
  },
};

const recruiterReducer = (
  state = recruiterReducerDefaultState,
  {
    type,
    name = null,
    logo = null,
    candidates = [],
    plan = {},
    page = 0,
    total = 0,
  }
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
    case SET_APPLICATION_LENGTH:
      return { ...state, pages: { ...state.pages, applicationTotal: total } };
    case SET_APPLICATION_PAGE:
      return { ...state, pages: { ...state.pages, applicationPage: page } };
    default:
      return state;
  }
};

export default recruiterReducer;
