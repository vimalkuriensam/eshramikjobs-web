import apiService from "../../authInterceptor/authAxios";

export const SET_RECENT_JOBS = "SET_RECENT_JOBS";
export const SET_SAVED_JOBS = "SET_SAVED_JOBS";
export const SET_APPLIED_JOBS = "SET_APPLIED_JOBS";
export const SET_RECOMMENDED_JOBS = "SET_RECOMMENDED_JOBS";
export const CLEAR_RECENT_JOBS = "CLEAR_RECENT_JOBS";
export const CLEAR_SAVED_JOBS = "CLEAR_SAVED_JOBS";
export const CLEAR_APPLIED_JOBS = "CLEAR_APPLIED_JOBS";
export const CLEAR_RECOMMENDED_JOBS = "CLEAR_RECOMMENDED_JOBS";

export const createJobs =
  ({ job }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post("/jobs/create", job);
      if (status == 200) return true;
    } catch (e) {
      throw e;
    }
  };

export const getJobs =
  ({
    pageNumber = null,
    itemsPerPage = null,
    jobTitle = null,
    location = null,
  } = {}) =>
  async (dispatch) => {
    try {
      const info = {
        pagination: {
          ...(pageNumber && { page: pageNumber }),
          ...(itemsPerPage && { count: itemsPerPage }),
        },
        search: {
          ...(jobTitle && { text: jobTitle }),
          ...(location && { location }),
        },
      };
      const { status, data } = await apiService().post("/jobs/recent", info);
      if (status == 200) return data.data;
    } catch (e) {
      throw e;
    }
  };

export const getRecentJobs =
  ({ pageNumber, itemsPerPage, jobTitle, location }) =>
  async (dispatch) => {
    try {
      dispatch(clearRecentJobs);
      const jobs = await dispatch(
        getJobs({ pageNumber, itemsPerPage, jobTitle, location })
      );
      if (jobs.length) dispatch(setRecentJobs({ jobs }));
    } catch (e) {
      throw e;
    }
  };

export const setRecentJobs = ({ jobs }) => ({
  type: SET_RECENT_JOBS,
  jobs,
});

export const clearRecentJobs = () => ({
  type: CLEAR_RECENT_JOBS,
});

export const getAppliedJobs = () => {};

export const setAppliedJobs = () => {};

export const clearAppliedJobs = () => ({
  type: CLEAR_APPLIED_JOBS,
});

export const getSavedJobs = () => {};

export const setSavedJobs = () => {};

export const clearSavedJobs = () => ({
  type: CLEAR_SAVED_JOBS,
});

export const getRecommendedJobs = () => {};

export const setRecommendedJobs = () => {};

export const clearRecommendedJobs = () => ({
  type: CLEAR_RECOMMENDED_JOBS,
});
