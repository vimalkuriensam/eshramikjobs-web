import apiService from "../../authInterceptor/authAxios";

export const SET_LOGIN = "SET_LOGIN";

export const setLogin =
  ({ mobile, email, name }) =>
  async (dispatch) => {
    try {
      const response = await apiService().post("/auth/signup", {
        mobile: `+91${mobile}`,
        email,
        name,
      });
      console.log(response);
    } catch (e) {
      throw e;
    }
  };
