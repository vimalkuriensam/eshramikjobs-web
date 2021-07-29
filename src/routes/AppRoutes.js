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
  Dashboard as DashboardView,
  Home as HomeView,
  AboutUs as AboutUsView,
  Companies as CompaniesView,
  Profile as ProfileView,
} from "../pages";

import { RegisterChildView } from "./childRoutes/Register";
import { JobsChildView } from "./childRoutes/Jobs";
import NavBar from "../components/organisms/Navbar";

const AppRoutes = () => (
  <Router history={history}>
    <ScrollTop />
    <Header />
    <Login />
    <Loader />
    <div className="u-display-flex u-overflow-hidden u-width-100">
      {/*<NavBar />*/}
      <div style={{ width: "100%" }}>
        {/*//className="navbar__outer">*/}
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={400} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact>
                    <Redirect to="/home" />
                  </Route>
                  <Route path="/dashboard" component={DashboardView} />
                  <Route path="/home" component={HomeView} />
                  <Route path="/register" component={RegisterChildView} />
                  <Route path="/jobs" component={JobsChildView} />
                  <Route path="/about" component={AboutUsView} />
                  <Route path="/companies" component={CompaniesView} />
                  <Route path="/profile" component={ProfileView} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </div>
    <Footer />
  </Router>
);

export default AppRoutes;
