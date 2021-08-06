import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import {
  AdminLogin as AdminLoginView,
  Signup as SignupView,
  ProfileCreation as ProfileCreationView,
  OTP as OTPView,
  RecruiterSignup as RecruiterSignupView
} from "../../pages";

export const RegisterChildView = () => {
  const { path, url } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={SignupView} />
        <Route path={`${path}/otp`} component={OTPView} />
        <Route path={`${path}/admin`} component={AdminLoginView} />
        <Route path={`${path}/signup`} component={RecruiterSignupView} />
        <Route path={`${path}/profile/:step`} component={ProfileCreationView} />
      </Switch>
    </Fragment>
  );
};
