import apiService from "../../authInterceptor/authAxios";
import history from "../../utils/history";

export const SET_ADDRESS_STATE = "SET_ADDRESS_STATE";
export const SET_ADDRESS_DISTRICT = "SET_ADDRESS_DISTRICT";
export const SET_ADDRESS_REGION = "SET_ADDRESS_REGION";

export const SET_PERMANENT_STATE = "SET_PERMANENT_STATE";
export const SET_PERMANENT_DISTRICT = "SET_PERMANENT_DISTRICT";
export const SET_PERMANENT_REGION = "SET_PERMANENT_REGION";

export const SET_INSTITUTION = "SET_INSTITUTION";
export const SET_DEGREE = "SET_DEGREE";
export const SET_COLLEGE = "SET_COLLEGE";
export const SET_TECHNICAL_COURSE = "SET_TECHNICAL_COURSE";
export const SET_NON_TECHNICAL_COURSE = "SET_NON_TECHNICAL_COURSE";

export const createProfile = (info, step) => async (dispatch) => {
  try {
    console.log(info, step);
    if (step == 1 && info.sameAsAddress) delete info.permanentAddress;
    const response = await apiService().post(`/profile/create/${step}`, info);
    console.log(response);
  } catch (e) {
    history.push(`/register/profile/${+step + 1}`);
    throw e;
  }
};

export const getAddressByPin = (pin) => async (dispatch) => {
  try {
    const { status, data } = await apiService().get(
      `/profile/get_add_by_pin/${pin}`
    );
    if (status == 200) return data.data;
  } catch (e) {
    throw e;
  }
};

export const setAddressState = ({ state }) => ({
  type: SET_ADDRESS_STATE,
  states: state,
});

export const setAddressDistrict = ({ district }) => ({
  type: SET_ADDRESS_DISTRICT,
  district,
});

export const setAddressRegion = ({ region }) => ({
  type: SET_ADDRESS_REGION,
  region,
});

export const getState = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("profile/get_state");
    if (status == 200) dispatch(setAddressState({ state: data.data }));
  } catch (e) {
    throw e;
  }
};

export const getDistrict =
  ({ district }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(
        `profile/get_district/${district}`
      );
      if (status == 200) dispatch(setAddressDistrict({ district: data.data }));
    } catch (e) {
      throw e;
    }
  };

export const setInstitutions = ({ institution }) => ({
  type: SET_INSTITUTION,
  institution,
});

export const setDegrees = ({ degrees }) => ({
  type: SET_DEGREE,
  degrees,
});

export const setTechnicalCourses = ({ technicalCourse }) => ({
  type: SET_TECHNICAL_COURSE,
  technicalCourse,
});

export const setNonTechnicalCourses = ({ nonTechnicalCourse }) => ({
  type: SET_NON_TECHNICAL_COURSE,
  nonTechnicalCourse,
});

export const getInstitutions =
  ({}) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(
        "/education/get/institute"
      );
      if (status == 200) dispatch(setInstitutions({ institution: data.data }));
    } catch (e) {
      throw e;
    }
  };

export const getDegrees = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/education/get/courses");
    if (status == 200) dispatch(setDegrees({ degrees: data.data }));
  } catch (e) {
    throw e;
  }
};

export const getTechnicalCourses = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/profile/get_tech");
    if (status == 200)
      dispatch(setTechnicalCourses({ technicalCourse: data.data }));
  } catch (e) {
    throw e;
  }
};

export const getNonTechnicalCourses = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/profile/get_nontech");
    if (status == 200)
      dispatch(setNonTechnicalCourses({ nonTechnicalCourse: data.data }));
  } catch (e) {
    throw e;
  }
};
