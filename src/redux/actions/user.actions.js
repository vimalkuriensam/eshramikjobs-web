import apiService from "../../authInterceptor/authAxios";

export const SET_BASIC_PROFILE = "SET_BASIC_PROFILE";

export const getBasicProfile = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/profile/get_basic");
    if (status == 200) {
      dispatch(setBasicProfile({ profile: data.data.recent }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const setBasicProfile = ({ profile }) => ({
  type: SET_BASIC_PROFILE,
  profile,
});
