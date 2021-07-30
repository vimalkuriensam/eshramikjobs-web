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
  Profile as ProfileView,
  Resumes as ResumesChild,
} from "../pages";

import { DashboardChildView } from "./childRoutes/Dashboard";
import { RegisterChildView } from "./childRoutes/Register";
import { JobsChildView } from "./childRoutes/Jobs";
import NavBar from "../components/organisms/Navbar";
import { connect } from "react-redux";
import { userType } from "../utils/data";
import AdminHeader from "../components/organisms/AdminHeader";

const AppRoutes = ({ tokenData }) => {
  const { type } = tokenData;
  return (
    <Router history={history}>
      <ScrollTop />
      {type == 3 ? <AdminHeader /> : <Header />}
      <Login />
      <Loader />
      <div className="u-display-flex u-overflow-hidden u-width-100">
        {type && type == 3 && <NavBar />}
        <div style={{ width: "100%" }}>
          {/*//className="navbar__outer">*/}
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={400}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route path="/" exact>
                      <Redirect to={type == 3 ? "/dashboard" : "/home"} />
                    </Route>
                    <Route path="/dashboard" component={DashboardChildView} />
                    <Route path="/resumes" component={ResumesChild} />
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
};

const mapStateToProps = (state) => ({
  tokenData: userType(state.auth?.accessToken),
});

export default connect(mapStateToProps)(AppRoutes);
