import apiService from "../../authInterceptor/authAxios";
import { userType, USER_TYPES } from "../../utils/data";
import history from "../../utils/history";
import { getState } from "./profile.actions";
import { getBasicProfile } from "./user.actions";
import { getCompanyInfo } from "./recruit.action";
import { fileUpload, loginState } from "./utils.action";

export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_EMAIL = "SET_EMAIL";
export const SET_VERIFICATION = "SET_VERIFICATION";

export const recruiterRegister = (info) => async (dispatch) => {
  try {
    const { data, status } = await apiService().post(
      "/auth/register_recruiter",
      info
    );
    if (status == 200) {
      const { accessToken, refreshToken } = data.data;
      dispatch(setAccessToken({ accessToken, refreshToken }));
      const response = await dispatch(getState());
      if (response) return true;
    }
  } catch (e) {
    throw e;
  }
};

export const setCompanyDetails = (info) => async (dispatch) => {
  try {
    const file = info.logoFile;
    let fileURL = null;
    if (file) fileURL = await dispatch(fileUpload({ file }));
    const updatedInfo = {
      ...info,
      ...(file && { logo: fileURL.url }),
    };
    delete updatedInfo.logoFile;
    const { status } = await apiService().post(
      "/auth/company_details",
      updatedInfo
    );
    if (status == 200) return true;
  } catch (e) {
    throw e;
  }
};

export const setSignup =
  ({ mobile, email, name }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post("/auth/signup", {
        mobile: `+91${mobile}`,
        email,
        name,
      });
      if (status == 200) dispatch(setEmail({ email }));
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

export const adminLogin =
  ({ info }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/auth/admin_login",
        info
      );
      if (status == 200) {
        const { accessToken, refreshToken, verified = null } = data["data"];
        dispatch(setAccessToken({ accessToken, refreshToken, verified }));
        const { type } = userType(accessToken);
        if (type == USER_TYPES.RECRUITER) {
          const resp = await dispatch(getCompanyInfo());
          if (resp) window.location.href = "/";
        } else window.location.href = "/";
      }
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
        dispatch(setEmail({ email }));
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

export const setLogout = () => ({
  type: SET_LOGOUT,
});

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
        if (mobile) {
          console.log(mobile);
          const response = await dispatch(getState());
          if (response) history.push("/register/profile/1");
        } else {
          const response = await dispatch(getBasicProfile());
          if (response) history.push("/");
        }
      }
    } catch (e) {
      throw e;
    }
  };

export const resendOTP =
  ({ mobile = null, email = null }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/resend", {
        ...(mobile && { mobile: `+91${mobile}` }),
        ...(email && { email }),
      });
      if (status === 200) {
        const { accessToken, refreshToken } = data["data"];
        dispatch(setAccessToken({ accessToken, refreshToken }));
      }
    } catch (e) {
      throw e;
    }
  };

export const getAccessToken =
  ({ refreshToken, email }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/getAccessToken", {
        refreshToken,
        un: email,
      });
      if (status == 200) {
        dispatch(setAccessToken(data));
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  };

export const setAccessToken = (tokens) => ({
  type: SET_ACCESS_TOKEN,
  tokens,
});

export const setEmail = ({ email }) => ({
  type: SET_EMAIL,
  email,
});

export const setVerification = ({ id }) => ({
  type: SET_VERIFICATION,
  id,
});
