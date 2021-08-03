import moment from "moment";
import {
  CLEAR_APPLIED_JOBS,
  CLEAR_RECENT_JOBS,
  CLEAR_RECOMMENDED_JOBS,
  CLEAR_SAVED_JOBS,
  SET_RECENT_JOBS,
} from "../actions/jobs.action";

const jobsReducerDefaultState = {
  recent: [],
  recommended: [],
  applied: [],
  saved: [],
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

const jobsReducer = (state = jobsReducerDefaultState, { type, jobs }) => {
  switch (type) {
    case CLEAR_RECENT_JOBS:
      return { ...state, recent: [] };
    case SET_RECENT_JOBS:
      return { ...state, recent: jobs };
    case CLEAR_APPLIED_JOBS:
      return { ...state, applied: [] };
    case CLEAR_RECOMMENDED_JOBS:
      return { ...state, recommended: [] };
    case CLEAR_SAVED_JOBS:
      return { ...state, saved: [] };
    default:
      return state;
  }
};

export default jobsReducer;
