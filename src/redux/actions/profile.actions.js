import apiService from "../../authInterceptor/authAxios";
import { funcMap } from "../../utils/data";
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
    if (step == 1 && info.sameAsAddress) delete info.permanentAddress;
    const { status } = await apiService().post(`/profile/create/${step}`, info);
    if (status == 200) {
      const response = await funcMap[step](dispatch);
      if (response) history.push(`/register/profile/${+step + 1}`);
    }
  } catch (e) {
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
    if (status == 200) {
      dispatch(setAddressState({ state: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getDistrict =
  ({ state }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(
        `profile/get_district/${state}`
      );
      if (status == 200) dispatch(setAddressDistrict({ district: data.data }));
    } catch (e) {
      throw e;
    }
  };

export const getRegion =
  ({ district }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().get(
        `profile/get_city/${district}`
      );
      if (status == 200) dispatch(setAddressRegion({ region: data.data }));
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
  technical: technicalCourse,
});

export const setNonTechnicalCourses = ({ nonTechnicalCourse }) => ({
  type: SET_NON_TECHNICAL_COURSE,
  nonTechnical: nonTechnicalCourse,
});

export const setColleges = ({ colleges }) => ({
  type: SET_COLLEGE,
  colleges,
});

export const getInstitutions = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/education/get/institute");
    if (status == 200) {
      dispatch(setInstitutions({ institution: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getDegrees = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/education/get/courses");
    if (status == 200) {
      dispatch(setDegrees({ degrees: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getTechnicalCourses = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/profile/get_tech");
    if (status == 200) {
      dispatch(setTechnicalCourses({ technicalCourse: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getNonTechnicalCourses = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/profile/get_nontech");
    if (status == 200) {
      dispatch(setNonTechnicalCourses({ nonTechnicalCourse: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getColleges = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get(
      "/education/get/university"
    );
    if (status == 200) {
      dispatch(setColleges({ colleges: data.data }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const getAllProfileInfo = () => async (dispatch) => {
  try {
    const responses = [1, 2, 3, 4, 5];
    const result = await Promise.all(
      responses.map((response) =>
        apiService()
          .get(`/profile/get/${response}`)
          .then(({ data }) => data.data)
      )
    );
    console.log(result);
    return true;
  } catch (e) {
    throw e;
  }
};
