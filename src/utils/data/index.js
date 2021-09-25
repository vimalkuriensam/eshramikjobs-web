import jwtDecode from "jwt-decode";
import moment from "moment";
import {
  dashboardHero,
  getActiveStatus,
  getApplicationDetails,
  getCompanyList,
  getRevenueDetails,
  setSubscriptionCurrentPage,
} from "../../redux/actions/admin.action";
import { setLogout } from "../../redux/actions/authentication.action";
import {
  applyJob,
  deleteJob,
  getAppliedJobs,
  getJob,
  getJobList,
  getNotificationJobPostings,
  getRecentJobs,
  getSavedJobs,
  getSkilledJobs,
  getSkills,
} from "../../redux/actions/jobs.action";
import {
  getColleges,
  getDegrees,
  getInstitutions,
  getNonTechnicalCourses,
  getState,
  getTechnicalCourses,
} from "../../redux/actions/profile.actions";
import {
  candidatesApplication,
  getCurrentPlan,
} from "../../redux/actions/recruit.action";
import { getAllProfileInfo } from "../../redux/actions/user.actions";
import { addMessage } from "../../redux/actions/utils.action";
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
          type: "process",
          to: "getProfileInfo",
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

export const HEADER_CONTENTS = [
  {
    text: "Jobs",
    type: "process",
    className: "header__link",
    activeClassName: "header__link--active",
    to: "getAllJobs",
    link: "/jobs",
  },
  {
    text: "Companies",
    className: "header__link",
    activeClassName: "header__link--active",
    type: "link",
    to: "/companies",
    link: "/companies",
  },
  {
    text: "Notification",
    className: "header__link",
    activeClassName: "header__link--active",
    type: "link",
    to: "/about",
    link: "/about",
  },
];

export const funcMap = {
  home: async (props) => history.push("/"),
  adminDashboard: async (dispatch) => {
    const response = await dispatch(dashboardHero());
    if (response) history.push("/dashboard");
  },
  resumesRecieved: async (dispatch) => {
    const response = await dispatch(
      getApplicationDetails({ page: 0, count: 8 })
    );
    if (response) history.push("/resumes");
  },
  recruiterSignup: () => history.push("/register/signup"),
  getAllJobs: async (dispatch, page = 0, redirect = true) => {
    const skillResponse = await dispatch(getSkills());
    if (skillResponse) {
      const response = await dispatch(
        getSkilledJobs({
          pageNumber: page,
          itemsPerPage: 10,
          skills: skillResponse,
        })
      );
      if (redirect && response) return history.push("/jobs");
      else if (response) return true;
    }
  },
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

  activeSubscription: async (dispatch, page = 0, redirect = true) => {
    let response;
    if (redirect)
      response = await Promise.all([
        dispatch(getActiveStatus()),
        dispatch(
          getCompanyList({
            type: SUBSCRIPTION_TYPES.active,
            pagination: { page, count: 7 },
          })
        ),
      ]);
    else
      response = await dispatch(
        getCompanyList({
          type: SUBSCRIPTION_TYPES.active,
          pagination: { page, count: 7 },
        })
      );
    if (response) {
      if (redirect) history.push("/dashboard/active-subscription");
      else return true;
    }
  },
  expiredSubscription: async (dispatch, page = 0, redirect = true) => {
    let response;
    if (redirect)
      response = await Promise.all([
        dispatch(getActiveStatus()),
        dispatch(
          getCompanyList({
            type: SUBSCRIPTION_TYPES.expire,
            pagination: { page, count: 7 },
          })
        ),
      ]);
    else
      response = await dispatch(
        getCompanyList({
          type: SUBSCRIPTION_TYPES.expire,
          pagination: { page, count: 7 },
        })
      );
    if (response) {
      if (redirect) history.push("/dashboard/expired-subscription");
      else return true;
    }
  },
  trialSubscription: async (dispatch, page = 0, redirect = true) => {
    let response;
    if (redirect)
      response = await Promise.all([
        dispatch(getActiveStatus()),
        dispatch(
          getCompanyList({
            type: SUBSCRIPTION_TYPES.trial,
            pagination: { page, count: 7 },
          })
        ),
      ]);
    else
      response = await dispatch(
        getCompanyList({
          type: SUBSCRIPTION_TYPES.trial,
          pagination: { page, count: 7 },
        })
      );
    if (response) {
      if (redirect) history.push("/dashboard/trial-subscription");
      else return true;
    }
  },
  enrolled: async (dispatch, page = 0, redirect = true) => {
    const response = await dispatch(
      getCompanyList({
        type: SUBSCRIPTION_TYPES.all,
        pagination: { page, count: 7 },
      })
    );
    if (response) {
      if (redirect) history.push("/enrolled");
      else {
        dispatch(
          setSubscriptionCurrentPage({ page, category: SUBSCRIPTION_TYPES.all })
        );
        return true;
      }
    }
  },
  allSubscription: async (dispatch, page = 0, redirect = true) => {
    const response = await dispatch(
      getCompanyList({
        type: SUBSCRIPTION_TYPES.all,
        pagination: { page, count: 6 },
      })
    );
    if (response) {
      if (redirect) history.push("/dashboard/active-subscription");
      else return true;
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
  applyAllJobLists: async (dispatch, id, page = 0) => {
    const response = await dispatch(applyJob({ id, type: "apply" }));
    if (response) {
      const resp = await funcMap["getAllJobs"](dispatch, page, false);
      if (resp)
        dispatch(
          addMessage({
            type: "success",
            content: "Job Applied",
          })
        );
    }
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
  getProfileInfo: async (dispatch, redirect = true) => {
    const response = await dispatch(getAllProfileInfo());
    if (response && redirect) {
      history.push("/user-profile");
      return true;
    } else if (response) return true;
  },
  candidates: async (dispatch, page = 0, redirect = true) => {
    const response = await dispatch(candidatesApplication({ page, count: 4 }));
    if (response) {
      if (redirect) history.push("/recruite/applications");
      else return true;
    }
  },
  activePlan: async (dispatch) => {
    const response = await dispatch(getCurrentPlan());
    if (response) history.push("/recruite/plans");
  },
  adminNotification: async (dispatch) => {
    const response = await dispatch(
      getNotificationJobPostings({ page: 0, count: 12 })
    );
    if (response) history.push("/notification/job-postings");
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
    link: "adminDashboard",
    type: "process",
    to: "/dashboard",
  },
  {
    text: "Sales",
    link: "/sales",
    type: "link",
    to: "/sales",
  },
  {
    text: "Enrolled Companies",
    link: "enrolled",
    type: "process",
    to: "/enrolled",
  },
  {
    text: "Resumes Recieved",
    link: "resumesRecieved",
    type: "process",
    to: "/resumes",
  },
  {
    text: "Create Jobs",
    link: "/post-jobs",
    type: "link",
    to: "/post-jobs",
  },
];

export const RECRUITER_NAVBAR_NAVS = [
  {
    text: "Post New Job",
    type: "link",
    link: "/recruite/create-jobs",
    to: "/recruite/create-jobs",
  },
  {
    text: "Profile details",
    type: "process",
    link: "activePlan",
    to: "/recruite/plans",
  },
  {
    text: "View applications",
    type: "process",
    link: "candidates",
    to: "/recruite/applications",
  },
];

export const userType = (token) => {
  if (token) {
    const { type, exp, user, email } = jwtDecode(token);
    return { type, exp, user, email };
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

export const SUBSCRIPTION_TYPES = {
  active: 1,
  trial: 2,
  expire: 3,
  all: 4,
};

export const USER_ROUTE_TYPES = {
  user: [
    "/otp",
    "/1",
    "/2",
    "/3",
    "/4",
    "/5",
    "/6",
    "/7",
    "/8",
    "/home",
    "/view",
    "/about",
    "/applied",
    "/recommended",
    "/saved",
    "/detail",
    "/create",
    "/companies",
    "/user-profile",
    "/register",
  ],
  recruiter: ["/create-jobs", "/plans", "/applications", "buy-plans", "view"],
  admin: [
    "/dashboard",
    "/active-subscription",
    "/expired-subscription",
    "/trial-subscription",
    "/resumes",
    "/job-postings",
    "/post-jobs",
    "/sales",
    "/enrolled",
  ],
  default: ["/admin", "/signup", "/profile", "/resume"],
};
