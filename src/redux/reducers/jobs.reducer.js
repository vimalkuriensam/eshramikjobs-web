import {
  APPLIED_JOBS_SAMPLES,
  COMPANIES_SAMPLES,
  RECENT_JOBS_SAMPLES,
  RECOMMENDED_JOBS_SAMPLES,
  SAVED_JOBS_SAMPLES,
} from "../../utils/data";

const jobsReducerDefaultState = {
  recent: RECENT_JOBS_SAMPLES,
  recommended: RECOMMENDED_JOBS_SAMPLES,
  applied: APPLIED_JOBS_SAMPLES,
  saved: SAVED_JOBS_SAMPLES,
  companies: COMPANIES_SAMPLES,
};

const jobsReducer = (state = jobsReducerDefaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default jobsReducer;
