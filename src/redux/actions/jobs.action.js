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
