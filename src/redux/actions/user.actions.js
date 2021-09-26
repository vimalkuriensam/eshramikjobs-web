import apiService from "../../authInterceptor/authAxios";

export const SET_BASIC_PROFILE = "SET_BASIC_PROFILE";
export const SET_PROFILE_INFO = "SET_PROFILE_INFO";
export const SET_PROFILE_EDUCATION = "SET_PROFILE_EDUCATION";
export const SET_PROFILE_PROFESSION = "SET_PROFILE_PROFESSION";
export const SET_PROFILE_SKILLS = "SET_PROFILE_SKILLS";
export const SET_PROFILE_EMPLOYMENT = "SET_PROFILE_EMPLOYMENT";
export const SET_PROFILE_OVERSEAS = "SET_PROFILE_OVERSEAS";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const ADD_RESUME = "ADD_RESUME";
export const CLEAR_RESUME = "CLEAR_RESUME";

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

export const getAllProfileInfo = () => async (dispatch) => {
  try {
    const responses = [1, 2, 3, 4, 5, 6];
    const result = await Promise.all(
      responses.map((response) =>
        apiService()
          .get(`/profile/get/${response}`)
          .then(({ data }) => data.data)
      )
    );
    const result2 = await dispatch(getBasicProfile());
    if (result && result2) {
      dispatch(clearProfile());
      dispatch(setProfileBasic(result[0]));
      dispatch(setProfileEducation(result[1]));
      dispatch(setProfileProfession(result[2]));
      dispatch(setProfileSkills(result[3]));
      dispatch(setProfileEmployment(result[4]));
      dispatch(setProfileOverseas(result[5]));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const clearProfile = () => ({
  type: CLEAR_PROFILE,
});

export const setProfileBasic = (profile) => ({
  type: SET_PROFILE_INFO,
  profile,
});

export const setProfileEducation = (profile) => ({
  type: SET_PROFILE_EDUCATION,
  profile,
});

export const setProfileProfession = (profile) => ({
  type: SET_PROFILE_PROFESSION,
  profile,
});

export const setProfileSkills = (profile) => ({
  type: SET_PROFILE_SKILLS,
  profile,
});

export const setProfileEmployment = (profile) => ({
  type: SET_PROFILE_EMPLOYMENT,
  profile,
});

export const setProfileOverseas = (profile) => ({
  type: SET_PROFILE_OVERSEAS,
  profile,
});

export const updateProfile = (section, info) => async (dispatch) => {
  try {
    const { status, data } = await apiService().post(
      `/profile/update/${section}`,
      info
    );
    if (status == 200) {
      return data.message;
    }
  } catch (e) {
    throw e;
  }
};

export const getResume =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch(clearResume());
      const { status, data } = await apiService().get(`/common/download/${id}`);
      if (status == 200) {
        dispatch(
          addResume({
            resume: {
              ...data.data,
              expiry: data.message,
            },
          })
        );
        return true;
      }
      console.log(status, data);
    } catch (e) {
      throw e;
    }
  };

export const addResume = ({ resume }) => ({
  type: ADD_RESUME,
  resume,
});

export const clearResume = () => ({
  type: CLEAR_RESUME,
});
