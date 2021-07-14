import {
  SET_ADDRESS_DISTRICT,
  SET_ADDRESS_REGION,
  SET_ADDRESS_STATE,
  SET_COLLEGE,
  SET_DEGREE,
  SET_INSTITUTION,
  SET_NON_TECHNICAL_COURSE,
  SET_PERMANENT_REGION,
  SET_TECHNICAL_COURSE,
} from "../actions/profile.actions";

const profileReducerDefaultState = {
  addressState: [],
  addressDistrict: [],
  addressRegion: [],
  permanentAddressState: [],
  permanentAddressDistrict: [],
  permanentAddressRegion: [],
  boardName: ["state", "cbse", "icse"],
  institutionName: [],
  degrees: [],
  colleges: [],
  technical: [],
  nonTechnical: [],
};

const profileReducer = (
  state = profileReducerDefaultState,
  {
    type,
    states,
    district,
    region,
    institution,
    degrees,
    colleges,
    technical,
    nonTechnical,
  }
) => {
  switch (type) {
    case SET_ADDRESS_STATE:
      return { ...state, addressState: states };
    case SET_ADDRESS_DISTRICT:
      return { ...state, addressDistrict: district };
    case SET_ADDRESS_REGION:
      return { ...state, addressRegion: region };
    case SET_PERMANENT_REGION:
      return { ...state, permanentAddressRegion: region };
    case SET_INSTITUTION:
      return { ...state, institutionName: institution };
    case SET_DEGREE:
      return { ...state, degrees };
    case SET_COLLEGE:
      return { ...state, colleges };
    case SET_TECHNICAL_COURSE:
      return { ...state, technical };
    case SET_NON_TECHNICAL_COURSE:
      return { ...state, nonTechnical };
    default:
      return state;
  }
};

export default profileReducer;
