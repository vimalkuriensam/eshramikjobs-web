import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import {
  Signup as SignupView,
  ProfileCreation as ProfileCreationView,
  OTP as OTPView,
} from "../../pages";

export const RegisterChildView = () => {
  const { path, url } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={SignupView} />
        <Route path={`${path}/profile/:step`} component={ProfileCreationView} />
        <Route path={`${path}/profile/otp`} component={OTPView} />
      </Switch>
    </Fragment>
  );
};
