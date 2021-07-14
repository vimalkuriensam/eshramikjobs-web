import apiService from "../../authInterceptor/authAxios";
import history from "../../utils/history";
import { loginState } from "./utils.action";

export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const setSignup =
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

export const setLogin =
  ({ email }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post("/auth/login", {
        un: email,
      });
      if (status == 200) {
        dispatch(loginState({ state: false }));
        history.push({
          pathname: "/register/otp",
          state: {
            email,
          },
        });
      }
    } catch (e) {
      throw e;
    }
  };

export const setLogout = () => (dispatch) => {
  dispatch({ type: SET_LOGOUT });
  window.location.href = "/home";
};

export const setOTP =
  ({ otp, mobile = undefined, email = undefined, login = false }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/verify", {
        ...(mobile && { mobile: `+91${mobile}` }),
        ...(email && { email }),
        otp,
        login: mobile ? false : true,
      });
      if (status == 200) {
        dispatch(setAccessToken(data["data"]));
        if (mobile) history.push("/register/profile/1");
        else history.push("/");
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
