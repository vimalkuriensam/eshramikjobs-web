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
  AboutUs as AboutUsView,
  BuyPlans as BuyPlansView,
  Companies as CompaniesView,
  Create as CreateJobs,
  Download as DownloadView,
  Enrolled as EnrolledView,
  Home as HomeView,
  Profile as ProfileView,
  RecruiterNotification as RecruiterNotificationView,
  Resumes as ResumesChild,
  Sales as SalesView,
  Jobs as JobsView,
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
import Message from "../components/organisms/Message";
import EventCaptureTut from "./EventCaptureTut";

const AppRoutes = ({ tokenData }) => {
  const { type } = tokenData;
  return (
    <Router history={history}>
      <ScrollTop />
      {type == USER_TYPES.ADMIN && <AdminHeader />}
      {type == USER_TYPES.RECRUITER && <RecruiterHeader />}
      {type !== USER_TYPES.ADMIN && type !== USER_TYPES.RECRUITER && <Header />}
      {type == 2 && <EventCaptureTut />}
      <Message />
      <Login />
      <Loader />
      <div className="recruiterNavbarContainer">
        {type == USER_TYPES.ADMIN && <NavBar />}
        {type == USER_TYPES.RECRUITER && <RecruiterNavbar />}
        <div style={{ width: "100%" }}>
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
                            ? "/recruite"
                            : "/home"
                        }
                      />
                    </Route>
                    <Route path="/register" component={RegisterChildView} />
                    <Route path="/resume/download/:id" component={DownloadView} />
                    <AdminRoute
                      path="/dashboard"
                      component={DashboardChildView}
                    />
                    <AdminRoute path="/resumes" component={ResumesChild} />
                    <AdminRoute
                      path="/notification/job-postings"
                      component={RecruiterNotificationView}
                    />
                    <AdminRoute path="/sales" component={SalesView} />
                    <AdminRoute path="/enrolled" component={EnrolledView} />
                    <AdminRoute path="/post-jobs" component={CreateJobs} />
                    <Route path="/create-jobs" component={CreateJobs} />
                    <Route path="/home" component={HomeView} />
                    <Route path="/about" component={AboutUsView} />
                    <Route path="/recruite" component={RecruiterChildView} />
                    <UserRoute path="/jobs" component={JobsChildView} />
                    <UserRoute path="/companies" component={CompaniesView} />
                    <UserRoute path="/user-profile" component={ProfileView} />
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
