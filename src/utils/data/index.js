import jwtDecode from "jwt-decode";
import moment from "moment";
import { setLogout } from "../../redux/actions/authentication.action";
import {
  applyJob,
  deleteJob,
  getAppliedJobs,
  getJob,
  getRecentJobs,
  getSavedJobs,
} from "../../redux/actions/jobs.action";
import {
  getColleges,
  getDegrees,
  getInstitutions,
  getNonTechnicalCourses,
  getState,
  getTechnicalCourses,
} from "../../redux/actions/profile.actions";
import history from "../history";

export const BASE_URL = "https://eshramik-server.herokuapp.com"; //"https://eshramik-api.herokuapp.com";

export const FEEDBACKS = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: "dummy-user",
  },
];

export const FOOTER_MAIN_CONTENTS = {
  rows: [
    {
      columns: [
        {
          type: "link",
          title: "About us",
          to: "",
        },
        {
          type: "link",
          title: "Contact us",
          to: "",
        },
        {
          type: "link",
          title: "Premium MBA Jobs",
          to: "",
        },
      ],
    },
    {
      columns: [
        {
          type: "link",
          title: "Terms & Conditions",
          to: "",
        },
        {
          type: "link",
          title: "FAQs",
          to: "",
        },
        {
          type: "link",
          title: "Premium Engineering Jobs",
          to: "",
        },
      ],
    },
    {
      columns: [
        {
          type: "link",
          title: "Privacy Policy",
          to: "",
        },
        {
          type: "link",
          title: "Trust and Safety",
          to: "",
        },
        {
          type: "link",
          title: "Govt. Jobs",
          to: "",
        },
      ],
    },
    {
      columns: [
        {
          type: "link",
          title: "Careers with Us",
          to: "",
        },
        {
          type: "link",
          title: "Upload Resume",
          to: "",
        },
        {
          type: "link",
          title: "International Jobs",
          to: "",
        },
      ],
    },
    {
      columns: [
        {
          type: "link",
          title: "Sitemap",
          to: "",
        },
        {
          type: "link",
          title: "Search Jobs",
          to: "searchJobs",
        },
        {
          type: "link",
          title: "Jobs in Gulf",
          to: "",
        },
      ],
    },
  ],
};

export const INVALID_EMAIL = "Invalid Email Format";

export const PROFILE_CONTENTS = {
  rows: [
    {
      columns: [
        {
          text: "Edit Profile",
          type: "link",
          to: "/user-profile",
        },
        {
          text: "Saved jobs",
          type: "process",
          to: "savedJobs",
        },
      ],
    },
    {
      columns: [
        {
          text: "Recommended jobs",
          type: "link",
          to: "/jobs/recommended",
        },
        {
          text: "Settings",
          type: "link",
          to: "/",
        },
      ],
    },
    {
      columns: [
        {
          text: "Applied jobs",
          type: "process",
          to: "appliedJobs",
        },
        {
          text: "logout",
          type: "process",
          to: "logout",
        },
      ],
    },
  ],
};

export const funcMap = {
  home: () => history.push("/"),
  recruiterSignup: () => history.push("/register/signup"),
  logout: (dispatch) => dispatch(setLogout()),
  searchJobs: () => window.scroll({ top: 0, left: 0, behavior: "smooth" }),
  savedJobs: async (dispatch) => {
    const response = await dispatch(
      getSavedJobs({
        pageNumber: 0,
        itemsPerPage: 4,
        jobTitle: null,
        location: null,
      })
    );
    if (response) {
      history.push("/jobs/saved");
      return true;
    }
  },
  applyJobLists: async (dispatch, id) => {
    const response = await dispatch(applyJob({ id, type: "apply" }));
    if (response)
      dispatch(
        getRecentJobs({
          pageNumber: 0,
          itemsPerPage: 4,
          jobTitle: null,
          location: null,
        })
      );
  },
  jobDelete: async (dispatch, id, type) =>
    await dispatch(deleteJob({ id, type })),
  appliedJobs: async (dispatch) => {
    const response = await dispatch(
      getAppliedJobs({
        pageNumber: 0,
        itemsPerPage: 4,
        jobTitle: null,
        location: null,
      })
    );
    if (response) {
      history.push("/jobs/applied");
      return true;
    }
  },
  recommendedJobs: async (dispatch) => {},
  getJob: async (dispatch, id) => await dispatch(getJob({ id })),
  0: async (dispatch) => {
    await dispatch(getState());
    return true;
  },
  1: async (dispatch) => {
    await dispatch(getColleges());
    await dispatch(getDegrees());
    await dispatch(getInstitutions());
    return true;
  },
  2: async (dispatch) => {
    await dispatch(getTechnicalCourses());
    await dispatch(getNonTechnicalCourses());
    return true;
  },
  3: (dispatch) => {
    return true;
  },
  4: async (dispatch) => {
    await dispatch(getTechnicalCourses());
    await dispatch(getNonTechnicalCourses());
    await dispatch(getState());
    return true;
  },
  5: (dispatch) => {
    return true;
  },
  6: (dispatch) => {
    return true;
  },
  7: (dispatch) => {
    return true;
  },
};

export const COMPANIES_SAMPLES = [
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
];

export const RECENT_JOBS_SAMPLES = [
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
];

export const SAVED_JOBS_SAMPLES = [
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
];

export const RECOMMENDED_JOBS_SAMPLES = [
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
];

export const APPLIED_JOBS_SAMPLES = [
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
  {
    image: "tata-motors",
    title: "Tata motors",
    degree: "Mechanical Engineering/diploma",
    description: "Good academic records",
    minExperience: 3,
    maxExperience: 4,
    location: "Pune",
    date: moment().valueOf(),
  },
];

export const NAVBAR_NAVS = [
  {
    text: "Dashboard",
    to: "/dashboard",
  },
  {
    text: "Sales",
    to: "/sales",
  },
  {
    text: "Enrolled Companies",
    to: "/companies",
  },
  {
    text: "Resumes Recieved",
    to: "/resumes",
  },
  {
    text: "Create Jobs",
    to: "/jobs/create",
  },
];

export const RECRUITER_NAVBAR_NAVS = [
  {
    text: "Post New Job",
    to: "/recruite/create-jobs",
  },
  {
    text: "Profile details",
    to: "/recruite/plans",
  },
  {
    text: "View applications",
    to: "/recruite/applications",
  },
];

export const userType = (token) => {
  if (token) {
    const { type, exp } = jwtDecode(token);
    return { type, exp };
  }
  return { type: null, exp: null };
};

export const USER_TYPES = {
  USER: 1,
  RECRUITER: 2,
  ADMIN: 3,
};

export const RECRUITER_STATUS = {
  COMPANY_UNVERIFIED: 0,
  PAYMENT: 1,
  VERIFIED: 2,
};

export const USER_ROUTE_TYPES = {
  user: [
    "/register",
    "/otp",
    "/1",
    "/2",
    "/3",
    "/4",
    "/5",
    "/6",
    "/7",
    "/home",
    "/about",
    "/applied",
    "/recommended",
    "/saved",
    "/detail",
    "/create",
    "/companies",
    "/user-profile",
  ],
  recruiter: ["/create-jobs", "/plans", "/applications", "buy-plans", "view"],
  admin: [
    "/dashboard",
    "/active-subscription",
    "/expired-subscription",
    "/trial-subscription",
    "/resumes",
  ],
  default: ["/admin", "/signup", "/profile"],
};
