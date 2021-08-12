import Axios from "axios";
import {
  getAccessToken,
  setLogout,
} from "../redux/actions/authentication.action";
import { setLoader } from "../redux/actions/utils.action";

import { store } from "../redux/stores/configureStore";
import history from "../utils/history";

const apiService = () => {
  const api = Axios.create({
    baseURL: process.env.BASE_URL,
  });
  let currentEndpoint = "";
  api.interceptors.request.use(async (config) => {
    try {
      currentEndpoint = config.url;
      store.dispatch(setLoader({ state: true }));
      const token = store.getState().auth?.accessToken;
      if (token) config.headers["Authorization"] = "Bearer " + token;
      config.headers["Content-Type"] = "application/json";
    } catch (e) {
      alert("error", e);
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      store.dispatch(setLoader({ state: false }));
      return response;
    },
    (error) => {
      store.dispatch(setLoader({ state: false }));
      //   store.dispatch(
      //     addMessage({
      //       text: error.response.data.message,
      //       status: INFO_STATUS.ERROR,
      //     })
      //   );
      if (error.response.status === 403) {
        const email = store.getState().auth?.email;
        const refreshToken = store.getState().auth?.refreshToken;
        if (email && refreshToken) {
          const resp = store.dispatch(getAccessToken({ refreshToken, email }));
          if (resp) return api.request(error.config);
          else history.push("/");
        }
        else {
          store.dispatch(setLogout());
          history.push("/register");
        }
      } else if (error.response.status === 401) {
        store.dispatch(setLogout());
        history.push("/register");
      } else return error;
    }
  );

  return api;
};

export default apiService;
