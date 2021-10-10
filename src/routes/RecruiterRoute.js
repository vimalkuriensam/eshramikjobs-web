import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import Logout from "../components/organisms/Logout";
import { RECRUITER_STATUS, userType, USER_TYPES } from "../utils/data";
import history from "../utils/history";

const RecruiterRoute = ({
  dispatch,
  isAuthenticated,
  token,
  verified,
  component: Component,
  ...rest
}) => {
  const { type } = userType(token);
  const getRedirection = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, [1000]);
    return <Route component={Logout} />;
  };

  const { path } = rest;
  if (path == "/recruite/buy-plans") {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && type == USER_TYPES.RECRUITER ? (
            <Component {...props} />
          ) : (
            getRedirection()
          )
        }
      ></Route>
    );
  }

  const getCompanyProfileRedirection = () => {
    window.location.href = "/register/signup/profile";
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(isAuthenticated, type, verified)
        if (isAuthenticated && type == USER_TYPES.RECRUITER) {
          if (verified == RECRUITER_STATUS.VERIFIED)
            return <Component {...props} />;
          else if (verified == RECRUITER_STATUS.COMPANY_UNVERIFIED) {
            if (path !== "/register/signup/profile")
              return (
                <Route render={() => getCompanyProfileRedirection()}></Route>
              );
            else return <Component {...props} />;
          } else if (verified == RECRUITER_STATUS.PAYMENT)
            return <Redirect to="/recruite/buy-plans" />;
        } else {
          return <Route render={() => getRedirection()}></Route>;
        }
      }}
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.accessToken,
  verified: state.auth.verified,
  token: state.auth.accessToken,
});

export default connect(mapStateToProps)(RecruiterRoute);
