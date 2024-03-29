import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";
import utilsReducer from "../reducers/utils.reducer";
import authenticationReducer from "../reducers/authentication.reducer";
import profileReducer from "../reducers/profile.reducer";
import jobsReducer from "../reducers/jobs.reducer";
import recruiterReducer from "../reducers/recruiter.reducer";
import userReducer from "../reducers/user.reducer";
import adminReducer from "../reducers/admin.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const encryptor = encryptTransform({
  secretKey: "dummy-secret",
  onError: function (error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
  blacklist: ["utils"],
};

const store = createStore(
  persistReducer(
    persistConfig,
    combineReducers({
      admin: adminReducer,
      auth: authenticationReducer,
      profile: profileReducer,
      jobs: jobsReducer,
      user: userReducer,
      recruiter: recruiterReducer,
      utils: utilsReducer,
    })
  ),
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
