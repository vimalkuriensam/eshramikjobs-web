import {
  CLEAR_APPLICATION_DETAILS,
  CLEAR_ENROLLED_COMPANIES,
  SET_ACTIVE_STATUS,
  SET_APPLICATION_DETAILS,
  SET_ENROLLED_COMPANIES,
  SET_REVENUE,
} from "../actions/admin.action";

const adminReducerDefaultState = {
  subscriptions: {
    active: 0,
    expired: 0,
    trial: 0,
  },
  sales: [],
  companies: [],
  resumes: [],
};

const adminReducer = (
  state = adminReducerDefaultState,
  { type, sales, applications, companies, subscriptions }
) => {
  switch (type) {
    case SET_REVENUE:
      console.log('redux', sales);
      return { ...state, sales };
    case SET_APPLICATION_DETAILS:
      return { ...state, resumes: applications };
    case CLEAR_APPLICATION_DETAILS:
      return { ...state, resumes: [] };
    case SET_ENROLLED_COMPANIES:
      return { ...state, companies: [...state.companies, ...companies] };
    case CLEAR_ENROLLED_COMPANIES:
      return { ...state, companies: [] };
    case SET_ACTIVE_STATUS:
      return { ...state, subscriptions }
    default:
      return state;
  }
};

export default adminReducer;
