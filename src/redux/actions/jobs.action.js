import apiService from "../../authInterceptor/authAxios";
import { addMessage } from "./utils.action";

export const SET_RECENT_JOBS = "SET_RECENT_JOBS";
export const SET_SAVED_JOBS = "SET_SAVED_JOBS";
export const SET_APPLIED_JOBS = "SET_APPLIED_JOBS";
export const SET_RECOMMENDED_JOBS = "SET_RECOMMENDED_JOBS";
export const SET_JOB_DETAIL = "SET_JOB_DETAIL";
export const CLEAR_RECENT_JOBS = "CLEAR_RECENT_JOBS";
export const CLEAR_SAVED_JOBS = "CLEAR_SAVED_JOBS";
export const CLEAR_APPLIED_JOBS = "CLEAR_APPLIED_JOBS";
export const CLEAR_RECOMMENDED_JOBS = "CLEAR_RECOMMENDED_JOBS";
export const CLEAR_JOB_DETAIL = "CLEAR_JOB_DETAIL";
export const SET_NOTIFICATION_JOBS = "SET_NOTIFICATION_JOBS";
export const CLEAR_NOTIFICATION_JOBS = "CLEAR_NOTIFICATION_JOBS";

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

export const getJob =
  ({ id }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(`/jobs/get/${id}`);
      if (status == 200) {
        const value = data.data[0];
        const hasValue = value.hasOwnProperty("job_data");
        let jobData = "";
        if (hasValue) {
          jobData = JSON.parse(value["job_data"]);
          delete value.job_data;
        }
        const updatedValue = {
          ...value,
          ...(hasValue && { job_data: jobData }),
        };
        console.log(updatedValue);
        dispatch(clearJobDetail());
        dispatch(setJobDetail({ detail: updatedValue }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const applyJob =
  ({ id, type = "apply" }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post(`/jobs/${type}`, {
        jobId: id,
      });
      if (status == 200) {
        await dispatch(getJob({ id }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setJobDetail = ({ detail }) => ({
  type: SET_JOB_DETAIL,
  detail,
});

export const clearJobDetail = () => ({
  type: CLEAR_JOB_DETAIL,
});

export const getJobs =
  ({
    pageNumber = null,
    itemsPerPage = null,
    jobTitle = null,
    location = null,
    type = "recent",
  } = {}) =>
  async (dispatch) => {
    try {
      const info = {
        pagination: {
          ...(pageNumber && { page: pageNumber }),
          ...(itemsPerPage && { count: itemsPerPage }),
        },
        ...(type == "recent" && {
          search: {
            ...(jobTitle && { text: jobTitle }),
            ...(location && { location }),
          },
        }),
      };
      const { status, data } = await apiService().post(`/jobs/${type}`, info);
      if (status == 200) {
        const value = data.data;
        const updatedValueArr = value.map((val) => {
          const hasValue = val.hasOwnProperty("job_data");
          if (hasValue) {
            var jobData = JSON.parse(val["job_data"]);
            delete val.job_data;
          }
          const updatedValue = {
            ...val,
            ...(hasValue && { job_data: jobData }),
          };
          return updatedValue;
        });
        return updatedValueArr;
      }
    } catch (e) {
      throw e;
    }
  };

export const getRecentJobs =
  ({ pageNumber, itemsPerPage, jobTitle, location }) =>
  async (dispatch) => {
    try {
      dispatch(clearRecentJobs());
      const jobs = await dispatch(
        getJobs({
          pageNumber,
          itemsPerPage,
          jobTitle,
          location,
          type: "recent",
        })
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

export const getAppliedJobs =
  ({ pageNumber, itemsPerPage, jobTitle, location }) =>
  async (dispatch) => {
    try {
      dispatch(clearAppliedJobs());
      const jobs = await dispatch(
        getJobs({
          pageNumber,
          itemsPerPage,
          jobTitle,
          location,
          type: "get_apply",
        })
      );
      if (jobs.length) dispatch(setAppliedJobs({ jobs }));
      return true;
    } catch (e) {
      throw e;
    }
  };

export const setAppliedJobs = ({ jobs }) => ({
  type: SET_APPLIED_JOBS,
  jobs,
});

export const clearAppliedJobs = () => ({
  type: CLEAR_APPLIED_JOBS,
});

export const getSavedJobs =
  ({ pageNumber, itemsPerPage, jobTitle, location }) =>
  async (dispatch) => {
    try {
      const jobs = await dispatch(
        getJobs({
          pageNumber,
          itemsPerPage,
          jobTitle,
          location,
          type: "saved",
        })
      );
      dispatch(clearSavedJobs());
      if (jobs.length) dispatch(setSavedJobs({ jobs }));
      return true;
    } catch (e) {
      throw e;
    }
  };

export const setSavedJobs = ({ jobs }) => ({
  type: SET_SAVED_JOBS,
  jobs,
});

export const clearSavedJobs = () => ({
  type: CLEAR_SAVED_JOBS,
});

export const getRecommendedJobs = () => {};

export const setRecommendedJobs = () => {};

export const clearRecommendedJobs = () => ({
  type: CLEAR_RECOMMENDED_JOBS,
});

export const deleteJob =
  ({ id, type = "save" }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post(`/jobs/${type}/delete`, {
        ...(type == "save" && { saveJobId: id }),
        ...(type == "apply" && { applyJobId: id }),
      });
      if (status == 200) return true;
    } catch (e) {
      throw e;
    }
  };

export const getNotificationJobPostings =
  ({ page = 0, count = 12 }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post("/jobs/admin/get_jobs", {
        pagination: {
          page,
          count,
        },
      });
      if (status == 200) {
        dispatch(clearNotificationJobs());
        dispatch(setNotificationJobs({ jobs: data.data }));
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setNotificationJobs = ({ jobs }) => ({
  type: SET_NOTIFICATION_JOBS,
  jobs,
});

export const clearNotificationJobs = () => ({
  type: CLEAR_NOTIFICATION_JOBS,
});

export const handleJobNotificationStatus =
  ({ id, type = "approve" }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(`/jobs/admin/${type}`, {
        jobId: id,
      });
      if (status == 200) {
        dispatch(getNotificationJobPostings({ page: 0, count: 12 }));
        dispatch(addMessage({ type: 'info', content: `Job status ${data.message}`}))
      }
    } catch (e) {
      throw e;
    }
  };
