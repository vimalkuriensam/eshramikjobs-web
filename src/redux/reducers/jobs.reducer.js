import moment from "moment";
import {
  CLEAR_APPLIED_JOBS,
  CLEAR_JOB_DETAIL,
  CLEAR_NOTIFICATION_JOBS,
  CLEAR_RECENT_JOBS,
  CLEAR_RECOMMENDED_JOBS,
  CLEAR_SAVED_JOBS,
  SET_APPLIED_JOBS,
  SET_JOB_DETAIL,
  SET_NOTIFICATION_JOBS,
  SET_RECENT_JOBS,
  SET_SAVED_JOBS,
} from "../actions/jobs.action";

const jobsReducerDefaultState = {
  recent: [],
  recommended: [],
  applied: [],
  saved: [],
  detail: {},
  notificationJobs: [],
  // recent: [
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  // ],
  // recommended: [
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  // ],
  // applied: [
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  // ],
  // saved: [
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  //   {
  //     image: "tata-motors",
  //     title: "Tata motors",
  //     degree: "Mechanical Engineering/diploma",
  //     description: "Good academic records",
  //     minExperience: 3,
  //     maxExperience: 4,
  //     location: "Pune",
  //     date: moment().valueOf(),
  //   },
  // ],
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
  { type, jobs, detail }
) => {
  switch (type) {
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
