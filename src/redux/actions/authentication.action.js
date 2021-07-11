import apiService from "../../authInterceptor/authAxios";
import history from "../../utils/history";

export const SET_LOGIN = "SET_LOGIN";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const setLogin =
  ({ mobile, email, name }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post("/auth/signup", {
        mobile: `+91${mobile}`,
        email,
        name,
      });
      if (status == 200)
        history.push({
          pathname: "/register/otp",
          state: {
            mobile,
          },
        });
    } catch (e) {
      throw e;
    }
  };

export const setOTP =
  ({ otp, mobile, login = false }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/verify", {
        mobile: `+91${mobile}`,
        otp,
        login,
      });
      if (status == 200) {
        dispatch(setAccessToken(data["data"]));
        history.push("/register/profile/1");
      }
    } catch (e) {
      throw e;
    }
  };

export const resendOTP =
  ({ mobile }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/resend", {
        mobile: `+91${mobile}`,
      });
      if (status === 200) {
        const { accessToken, refreshToken } = data["data"];
        dispatch(setAccessToken({ accessToken, refreshToken }));
      }
    } catch (e) {
      throw e;
    }
  };

export const setAccessToken = ({ accessToken, refreshToken }) => ({
  type: SET_ACCESS_TOKEN,
  payload: {
    accessToken,
    refreshToken,
  },
});
