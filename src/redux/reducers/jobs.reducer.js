const jobsReducerDefaultState = {
  recent: [],
  recommended: [],
  applied: [],
  saved: [],
};

const jobsReducer = (state = jobsReducerDefaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default jobsReducer;
