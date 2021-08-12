import {
  CLEAR_NOTIFICATION,
  SET_LOADER_STATE,
  SET_LOGIN_STATE,
  SET_NOTIFICATION,
} from "../actions/utils.action";

const utilsReducerDefaultState = {
  notification: 0,
  loginState: false,
  loaderState: false,
  feedbacks: [
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      picture: "dummy-user",
    },
  ],
};

const utilsReducer = (state = utilsReducerDefaultState, { type, value }) => {
  switch (type) {
    case SET_LOGIN_STATE:
      return { ...state, loginState: value };
    case SET_LOADER_STATE:
      return { ...state, loaderState: value };
    case SET_NOTIFICATION:
      return { ...state, notification: state.notification + 1 };
    case CLEAR_NOTIFICATION:
      return { ...state, notification: 0 };
    default:
      return state;
  }
};

export default utilsReducer;
