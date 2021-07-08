import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "./routes/appRoutes";
import { store, persistor } from "./redux/stores/configureStore";

import "./styles/main.scss";

const connectedComponents = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
