import {
  CLEAR_ALL_JOBS,
  CLEAR_APPLIED_JOBS,
  CLEAR_JOB_DETAIL,
  CLEAR_NOTIFICATION_JOBS,
  CLEAR_RECENT_JOBS,
  CLEAR_RECOMMENDED_JOBS,
  CLEAR_SAVED_JOBS,
  SET_ALL_JOBS,
  SET_ALL_JOBS_COUNT,
  SET_ALL_JOBS_PAGE,
  SET_ALL_JOBS_SKILL_MATCH,
  SET_APPLIED_JOBS,
  SET_JOB_DETAIL,
  SET_NOTIFICATION_JOBS,
  SET_RECENT_JOBS,
  SET_SAVED_JOBS,
} from "../actions/jobs.action";

const jobsReducerDefaultState = {
  allJobs: [],
  recent: [],
  recommended: [],
  applied: [],
  saved: [],
  detail: {},
  notificationJobs: [],
  page: {
    allJobsPage: 0,
    allJobsTotal: 0,
    allJobsMatch: 0,
  },
  companies: [
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
  ],
};

const jobsReducer = (
  state = jobsReducerDefaultState,
  { type, jobs, detail, page, count }
) => {
  switch (type) {
    case SET_ALL_JOBS:
      return { ...state, allJobs: jobs };
    case CLEAR_ALL_JOBS:
      return { ...state, allJobs: [] };
    case SET_ALL_JOBS_PAGE:
      return { ...state, page: { ...state.page, allJobsPage: page } };
    case SET_ALL_JOBS_COUNT:
      return { ...state, page: { ...state.page, allJobsTotal: count } };
    case SET_ALL_JOBS_SKILL_MATCH:
      return { ...state, page: { ...state.page, allJobsMatch: count } };
    case CLEAR_RECENT_JOBS:
      return { ...state, recent: [] };
    case SET_RECENT_JOBS:
      return { ...state, recent: jobs };
    case SET_JOB_DETAIL:
      return { ...state, detail };
    case CLEAR_JOB_DETAIL:
      return { ...state, detail: {} };
    case CLEAR_APPLIED_JOBS:
      return { ...state, applied: [] };
    case SET_APPLIED_JOBS:
      return { ...state, applied: jobs };
    case CLEAR_RECOMMENDED_JOBS:
      return { ...state, recommended: [] };
    case SET_SAVED_JOBS:
      return { ...state, saved: jobs };
    case CLEAR_SAVED_JOBS:
      return { ...state, saved: [] };
    case SET_NOTIFICATION_JOBS:
      return { ...state, notificationJobs: jobs };
    case CLEAR_NOTIFICATION_JOBS:
      return { ...state, notificationJobs: [] };
    default:
      return state;
  }
};

export default jobsReducer;
