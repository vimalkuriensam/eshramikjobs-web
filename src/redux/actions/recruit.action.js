import apiService from "../../authInterceptor/authAxios";
import {
  addResume,
  setProfileBasic,
  setProfileEducation,
  setProfileEmployment,
  setProfileOverseas,
  setProfileProfession,
  setProfileSkills,
} from "./user.actions";
import { addMessage } from "./utils.action";

export const SET_COMPANY_INFO = "SET_COMPANY_INFO";
export const SET_CANDIDATES = "SET_CANDIDATES";
export const CLEAR_CANDIDATES = "CLEAR_CANDIDATES";
export const SET_CURRENT_PLAN = "SET_CURRENT_PLAN";
export const CLEAR_CURRENT_PLAN = "CLEAR_CURRENT_PLAN";
export const SET_APPLICATION_LENGTH = "SET_APPLICATION_LENGTH";
export const SET_APPLICATION_PAGE = "SET_APPLICATION_PAGE";
export const SET_CANDIDATE_INFO = "SET_CANDIDATE_INFO";
export const CLEAR_CANDIDATE_INFO = "CLEAR_CANDIDATE_INFO";

export const buyPlan =
  ({ planId }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/payment/purchase_plan",
        { planId }
      );
      if (status == 200) return data.data;
    } catch (e) {
      throw e;
    }
  };

export const confirmOrder = (info) => async (dispatch) => {
  try {
    const { status, data } = await apiService().post(
      "/payment/order_validate",
      info
    );
    if (status == 200) return data;
  } catch (e) {
    throw e;
  }
};

export const getCompanyInfo = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/jobs/recruiter/company");
    if (status == 200) {
      if (data.data.length) {
        const { name, logo } = data.data[0];
        dispatch(setCompanyInfo({ name, logo }));
      }
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const setCompanyInfo = ({ name, logo }) => ({
  type: SET_COMPANY_INFO,
  name,
  logo,
});

export const getPlans = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/plans/get");
    if (status == 200) return data.data;
  } catch (e) {
    throw e;
  }
};

export const candidatesApplication =
  ({ page = 0, count = 20 } = {}) =>
  async (dispatch) => {
    try {
      const response = await dispatch(getCandiatesApplication({ page, count }));
      if (response) {
        dispatch(clearCandidates());
        dispatch(setCandidates({ candidates: [...response.data] }));
        dispatch(setApplicationLength({ total: response.length }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const getCandiatesApplication =
  ({ page, count }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/jobs/candidates/apply",
        {
          pagination: {
            page,
            count,
          },
        }
      );
      if (status == 200) {
        if (data?.total) return { length: data.total, data: data.data };
        return data.data;
      }
    } catch (e) {
      throw e;
    }
  };

export const getCurrentPlan = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/plans/active_plan");
    if (status == 200) {
      dispatch(setCurrentPlan({ plan: data.data[0] }));
      return true;
    } else throw { message: "Unable to load plans" };
  } catch (e) {
    dispatch(addMessage({ type: "error", content: e.message }));
    // throw e;
  }
};

export const setCurrentPlan = ({ plan }) => ({
  type: SET_CURRENT_PLAN,
  plan,
});

export const clearCurrentPlan = () => ({
  type: CLEAR_CURRENT_PLAN,
});

export const setCandidates = ({ candidates }) => ({
  type: SET_CANDIDATES,
  candidates,
});

export const clearCandidates = () => ({
  type: CLEAR_CANDIDATES,
});

export const setApplicationLength = ({ total = 0 } = {}) => ({
  type: SET_APPLICATION_LENGTH,
  total,
});

export const setApplicationPage = ({ page = 0 } = {}) => ({
  type: SET_APPLICATION_PAGE,
  page,
});

export const getCandidateInfo =
  ({ profileId }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(`/common/getresume`, {
        profileId,
      });
      if (status == 200) {
        dispatch(clearCandidateInfo());
        console.log(data.data);
        // dispatch(setCandidateInfo({ info: data?.data }));
        dispatch(
          addResume({
            resume: {
              ...data.data,
              expiry: data?.message,
            },
          })
        );
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  };

export const clearCandidateInfo = () => ({
  type: CLEAR_CANDIDATE_INFO,
});

export const setCandidateInfo = ({ info }) => ({
  type: SET_CANDIDATE_INFO,
  info,
});
