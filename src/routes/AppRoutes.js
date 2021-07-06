import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import ScrollTop from "../utils/ScrollTop";

const AppRoutes = () => (
  <Router history={history}>
    <ScrollTop />
    <Switch></Switch>
  </Router>
);

export default AppRoutes;
