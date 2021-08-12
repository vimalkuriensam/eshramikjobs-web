import { SET_COMPANY_INFO } from "../actions/recruit.action";

const recruiterReducerDefaultState = {
  name: null,
  logo: null,
};

const recruiterReducer = (
  state = recruiterReducerDefaultState,
  { type, name = null, logo = null }
) => {
  switch (type) {
    case SET_COMPANY_INFO:
      return { ...state, name, logo };
    default:
      return state;
  }
};

export default recruiterReducer;
