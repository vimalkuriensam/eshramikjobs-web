import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userType, USER_TYPES } from "../utils/data";

const AdminRoute = ({
  dispatch,
  isAuthenticated,
  token,
  component: Component,
  ...rest
}) => {
  const { type } = userType(token);

  const getRedirection = () => {
    window.location.href = "/register/admin";
    return <Fragment>Redirecting</Fragment>;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && type == USER_TYPES.ADMIN ? (
          <Component {...props} />
        ) : (
          getRedirection()
          //<Redirect to="/register/admin" />
        )
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.accessToken,
  token: state.auth.accessToken,
});

export default connect(mapStateToProps)(AdminRoute);
