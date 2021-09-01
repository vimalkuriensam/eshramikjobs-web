import apiService from "../../authInterceptor/authAxios";
import { addMessage } from "./utils.action";

export const SET_COMPANY_INFO = "SET_COMPANY_INFO";
export const SET_CANDIDATES = "SET_CANDIDATES";
export const CLEAR_CANDIDATES = "CLEAR_CANDIDATES";
export const SET_CURRENT_PLAN = "SET_CURRENT_PLAN";
export const CLEAR_CURRENT_PLAN = "CLEAR_CURRENT_PLAN";

export const buyPlan =
  ({ planId }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/payment/purchase_plan",
        { planId }
      );
      console.log(status, data, "actions");
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
    console.log(data, status);
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
        dispatch(setCandidates({ candidates: [...response] }));
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
      if (status == 200) return data.data;
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
