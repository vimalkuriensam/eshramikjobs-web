import { SUBSCRIPTION_TYPES } from "../../utils/data";
import {
  CLEAR_APPLICATION_DETAILS,
  CLEAR_ENROLLED_COMPANIES,
  SET_ACTIVE_STATUS,
  SET_APPLICATION_DETAILS,
  SET_ENROLLED_COMPANIES,
  SET_RESUME_LENGTH,
  SET_RESUME_PAGE,
  SET_REVENUE,
  SET_SUBSCRIPTIONS,
  SET_SUBSCRIPTIONS_LENGTH,
  SET_SUBSCRIPTION_PAGE,
} from "../actions/admin.action";

const adminReducerDefaultState = {
  subscriptions: {
    active: 0,
    expired: 0,
    trial: 0,
  },
  subscriptionValue: {
    [SUBSCRIPTION_TYPES.active]: [],
    [SUBSCRIPTION_TYPES.expire]: [],
    [SUBSCRIPTION_TYPES.trial]: [],
    [SUBSCRIPTION_TYPES.all]: [],
  },
  sales: [],
  companies: [],
  resumes: [],
  pages: {
    resumePage: 0,
    resumeTotal: 0,
    subscriptionTotal: {
      [SUBSCRIPTION_TYPES.active]: 0,
      [SUBSCRIPTION_TYPES.expire]: 0,
      [SUBSCRIPTION_TYPES.trial]: 0,
      [SUBSCRIPTION_TYPES.all]: 0,
    },
    subscriptionPage: {
      [SUBSCRIPTION_TYPES.active]: 0,
      [SUBSCRIPTION_TYPES.expire]: 0,
      [SUBSCRIPTION_TYPES.trial]: 0,
      [SUBSCRIPTION_TYPES.all]: 0,
    },
  },
};

const adminReducer = (
  state = adminReducerDefaultState,
  { type, sales, applications, companies, subscriptions, length, page, payload }
) => {
  switch (type) {
    case SET_REVENUE:
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
      return { ...state, subscriptions };
    case SET_RESUME_LENGTH:
      return { ...state, pages: { ...state.pages, resumeTotal: length } };
    case SET_RESUME_PAGE:
      return { ...state, pages: { ...state.pages, resumePage: page } };
    case SET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptionValue: {
          ...state.subscriptionValue,
          [payload.category]: payload.subscriptions,
        },
      };
    case SET_SUBSCRIPTIONS_LENGTH:
      return {
        ...state,
        pages: {
          ...state.pages,
          subscriptionTotal: {
            ...state.pages.subscriptionTotal,
            [payload.category]: payload.total,
          },
        },
      };
    case SET_SUBSCRIPTION_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          subscriptionPage: {
            ...state.pages.subscriptionPage,
            [payload.category]: payload.page,
          },
        },
      };
    default:
      return state;
  }
};

export default adminReducer;
