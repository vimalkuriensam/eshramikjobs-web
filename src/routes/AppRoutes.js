import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import ScrollTop from "../utils/ScrollTop";

import { Home as HomeView } from "../pages";

const AppRoutes = () => (
  <Router history={history}>
    <ScrollTop />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={HomeView} />
    </Switch>
  </Router>
);

export default AppRoutes;
