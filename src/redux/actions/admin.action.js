import moment from "moment";
import apiService from "../../authInterceptor/authAxios";
import { SUBSCRIPTION_TYPES } from "../../utils/data";
import { getCandiatesApplication } from "./recruit.action";

export const SET_REVENUE = "SET_REVENUE";
export const SET_APPLICATION_DETAILS = "SET_APPLICATION_DETAILS";
export const CLEAR_APPLICATION_DETAILS = "CLEAR_APPLICATION_DETAILS";
export const SET_ENROLLED_COMPANIES = "SET_ENROLLED_COMPANIES";
export const CLEAR_ENROLLED_COMPANIES = "CLEAR_ENROLLED_COMPANIES";
export const SET_ACTIVE_STATUS = "SET_ACTIVE_STATUS";
export const SET_RESUME_LENGTH = "SET_RESUME_LENGTH";
export const SET_RESUME_PAGE = "SET_RESUME_PAGE";
export const SET_SUBSCRIPTIONS = "SET_SUBSCRIPTIONS";
export const SET_SUBSCRIPTIONS_LENGTH = "SET_SUBSCRIPTIONS_LENGTH";
export const SET_SUBSCRIPTION_PAGE = "SET_SUBSCRIPTION_PAGE";

export const dashboardHero = () => async (dispatch) => {
  try {
    const response = await Promise.all([
      dispatch(getApplicationDetails({ page: 0, count: 5 })),
      dispatch(getRevenueDetails()),
      dispatch(getEnrolledCompanies()),
      dispatch(getActiveStatus()),
    ]);
    if (response) return true;
  } catch (e) {
    throw e;
  }
};

export const getEnrolledCompanies =
  ({ companies = 8 } = {}) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(
        `/common/companies/${companies}`
      );
      if (status == 200) {
        dispatch(clearEnrolledCompanies());
        dispatch(setEnrolledCompanies({ companies: data.data }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setEnrolledCompanies = ({ companies = [] }) => ({
  type: SET_ENROLLED_COMPANIES,
  companies,
});

export const clearEnrolledCompanies = () => ({
  type: CLEAR_ENROLLED_COMPANIES,
});

export const getActiveStatus = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/admin/active_user_stat");

    if (status == 200) {
      const {
        activePerc: active,
        trialPerc: trial,
        expiredPerc: expired,
      } = data.data;
      dispatch(setActiveStatus({ active, expired, trial }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getCompanyList =
  ({
    type = SUBSCRIPTION_TYPES.active,
    sort = "date",
    pagination = { page: 0, count: 6 },
  }) =>
  async (dispatch) => {
    try {
      const {
        status,
        data: { data, total },
      } = await apiService().post("/admin/get_companies_list", {
        pagination,
        type,
        sort,
      });
      if (status == 200) {
        dispatch(setSubscriptions({ subscriptions: data, category: type }));
        dispatch(setSubscriptionLength({ total, category: type }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setSubscriptions = ({ subscriptions, category }) => ({
  type: SET_SUBSCRIPTIONS,
  payload: {
    category,
    subscriptions,
  },
});

export const setSubscriptionLength = ({ total = 0, category }) => ({
  type: SET_SUBSCRIPTIONS_LENGTH,
  payload: {
    category,
    total,
  },
});

export const setActiveStatus = ({
  active = 0,
  expired = 0,
  trial = 0,
} = {}) => ({
  type: SET_ACTIVE_STATUS,
  subscriptions: {
    active,
    expired,
    trial,
  },
});

export const getRevenueDetails = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/admin/revenue_details");
    if (status == 200) {
      let updatedData = {};
      for (let i = 0; i < 7; i++)
        updatedData[moment().subtract(i, "days").format("MM-DD-YYYY")] = 0;
      data.data.forEach((val) => {
        updatedData[moment(+val.paymentDate).format("MM-DD-YYYY")] +=
          +val.price;
      });

      const updatedDataBin = Object.keys(updatedData).map((val) => ({
        date: val,
        price: updatedData[val],
      }));
      dispatch(setRevenueDetails({ sales: updatedDataBin }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const setRevenueDetails = ({ sales }) => ({
  type: SET_REVENUE,
  sales,
});

export const getDetails = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().post(
      "/admin/get_companies_list",
      {
        type: "4",
        pagination: {
          page: 0,
          count: 12,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

export const getApplicationDetails =
  ({ count = 20 } = {}) =>
  async (dispatch, getState) => {
    try {
      const page = getState().admin.pages.resumePage;
      const { data, length } = await dispatch(
        getCandiatesApplication({ page, count })
      );
      if (data) {
        if (length) dispatch(setResumeLength({ length }));
        dispatch(clearApplicationDetails());
        dispatch(setApplicationDetails({ applications: data }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setApplicationDetails = ({ applications }) => ({
  type: SET_APPLICATION_DETAILS,
  applications,
});

export const clearApplicationDetails = () => ({
  type: CLEAR_APPLICATION_DETAILS,
});

export const setResumeLength = ({ length = 5 } = {}) => ({
  type: SET_RESUME_LENGTH,
  length,
});

export const setResumePage = ({ page = 0 }) => ({
  type: SET_RESUME_PAGE,
  page,
});

export const setSubscriptionCurrentPage = ({ page = 0, category }) => ({
  type: SET_SUBSCRIPTION_PAGE,
  payload: {
    page,
    category,
  },
});
