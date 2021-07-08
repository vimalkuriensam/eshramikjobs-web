import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import ScrollTop from "../utils/ScrollTop";

import Header from "../components/organisms/Header";
import Login from "../components/organisms/Login";
import Loader from "../components/organisms/Loader";
import { Home as HomeView, Signup as SignupView } from "../pages";

const AppRoutes = () => (
  <Router history={history}>
    <ScrollTop />
    <Header />
    <Login />
    <Loader />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={HomeView} />
      <Route path="/register" component={SignupView} />
    </Switch>
  </Router>
);

export default AppRoutes;
