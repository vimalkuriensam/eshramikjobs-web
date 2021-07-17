import moment from "moment";

const jobsReducerDefaultState = {
  recent: [
    {
      image: "tata-motors",
      title: "Tata motors",
      degree: "Mechanical Engineering/diploma",
      description: "Good academic records",
      minExperience: 3,
      maxExperience: 4,
      location: "Pune",
      date: moment().valueOf(),
    },
    {
      image: "tata-motors",
      title: "Tata motors",
      degree: "Mechanical Engineering/diploma",
      description: "Good academic records",
      minExperience: 3,
      maxExperience: 4,
      location: "Pune",
      date: moment().valueOf(),
    },
    {
      image: "tata-motors",
      title: "Tata motors",
      degree: "Mechanical Engineering/diploma",
      description: "Good academic records",
      minExperience: 3,
      maxExperience: 4,
      location: "Pune",
      date: moment().valueOf(),
    },
    {
      image: "tata-motors",
      title: "Tata motors",
      degree: "Mechanical Engineering/diploma",
      description: "Good academic records",
      minExperience: 3,
      maxExperience: 4,
      location: "Pune",
      date: moment().valueOf(),
    },
  ],
  recommended: [],
  applied: [],
  saved: [],
  companies: [
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
    "tata-motors",
    "atlas-copco",
  ],
};

const jobsReducer = (state = jobsReducerDefaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default jobsReducer;
