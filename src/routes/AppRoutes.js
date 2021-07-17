import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import history from "../utils/history";
import ScrollTop from "../utils/ScrollTop";

import Header from "../components/organisms/Header";
import Login from "../components/organisms/Login";
import Loader from "../components/organisms/Loader";
import Footer from "../components/organisms/Footer";
import {
  Home as HomeView,
  AboutUs as AboutUsView,
  Companies as CompaniesView,
} from "../pages";

import { RegisterChildView } from "./childRoutes/Register";
import { JobsChildView } from "./childRoutes/Jobs";

const AppRoutes = () => (
  <Router history={history}>
    <ScrollTop />
    <Header />
    <Login />
    <Loader />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={400} classNames="fade">
            <Switch location={location}>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={HomeView} />
              <Route path="/register" component={RegisterChildView} />
              <Route path="/jobs" component={JobsChildView} />
              <Route path="/about" component={AboutUsView} />
              <Route path="/companies" component={CompaniesView} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
    <Footer />
  </Router>
);

export default AppRoutes;
