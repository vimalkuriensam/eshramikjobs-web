import apiService from "../../authInterceptor/authAxios";

export const SET_LOGIN_STATE = "SET_LOGIN_STATE";
export const SET_LOADER_STATE = "SET_LOADER_STATE";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const loginState = ({ state }) => ({
  type: SET_LOGIN_STATE,
  value: state,
});

export const setLoader = ({ state }) => ({
  type: SET_LOADER_STATE,
  value: state,
});

export const setNotification = () => ({
  type: SET_NOTIFICATION,
});

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});

export const fileUpload =
  ({ file }) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { status, data } = await apiService().post(
        "/common/upload",
        formData
      );
      if (status == 200) return data.data;
    } catch (e) {
      throw e;
    }
  };

export const addMessage = (info) => ({
  type: ADD_MESSAGE,
  info,
});

export const removeMessage = () => ({
  type: REMOVE_MESSAGE,
});
