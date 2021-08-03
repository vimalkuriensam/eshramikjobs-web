import apiService from "../../authInterceptor/authAxios";

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
      }
      console.log('info', info);
      const response = await apiService().post("/jobs/recent", info);
      console.log(response);
    } catch (e) {
      throw e;
    }
  };
