import Axios from "axios";
import { setLoader } from "../redux/actions/utils.action";

import { store } from "../redux/stores/configureStore";
import { BASE_URL } from "../utils/data";
import history from "../utils/history";

const apiService = () => {
  const api = Axios.create({
    baseURL: BASE_URL,
  });

  api.interceptors.request.use(async (config) => {
    try {
      store.dispatch(setLoader({ state: true }));
      //   const token = store.getState().user?.token;
      //   if (token) config.headers["Authorization"] = "Bearer " + token;
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
      //   if (error.response.status === 403) history.push("/auth/signin");
      return Promise.reject(error);
    }
  );

  return api;
};

export default apiService;
