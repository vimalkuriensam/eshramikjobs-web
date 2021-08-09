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
  Create as CreateJobs,
} from "../pages";

import { DashboardChildView } from "./childRoutes/Dashboard";
import { RegisterChildView } from "./childRoutes/Register";
import { JobsChildView } from "./childRoutes/Jobs";
import NavBar from "../components/organisms/Navbar";
import { connect } from "react-redux";
import { userType, USER_TYPES } from "../utils/data";
import AdminHeader from "../components/organisms/AdminHeader";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import RecruiterHeader from "../components/organisms/RecruiterHeader";
import RecruiterNavbar from "../components/organisms/RecruiterNavbar";
import { RecruiterChildView } from "./childRoutes/Recruiter";

const AppRoutes = ({ tokenData }) => {
  const { type } = tokenData;
  return (
    <Router history={history}>
      <ScrollTop />
      <AdminHeader />
      <RecruiterHeader />
      <Header />
      <Login />
      <Loader />
      <div className="u-display-flex u-overflow-hidden u-width-100">
        <NavBar />
        <RecruiterNavbar />
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
                      <Redirect
                        to={
                          type == USER_TYPES.ADMIN
                            ? "/dashboard"
                            : type == USER_TYPES.RECRUITER
                            ? "/recruite/create-jobs"
                            : "/home"
                        }
                      />
                    </Route>
                    <Route path="/register" component={RegisterChildView} />
                    <AdminRoute
                      path="/dashboard"
                      component={DashboardChildView}
                    />
                    <AdminRoute path="/resumes" component={ResumesChild} />
                    <Route path="/create-jobs" component={CreateJobs} />
                    <Route path="/home" component={HomeView} />
                    <Route path="/about" component={AboutUsView} />
                    <Route path="/recruite" component={RecruiterChildView} />
                    <UserRoute path="/jobs" component={JobsChildView} />
                    <UserRoute path="/companies" component={CompaniesView} />
                    <UserRoute path="/profile" component={ProfileView} />
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
