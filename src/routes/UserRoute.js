import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({
  dispatch,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.accessToken,
});

export default connect(mapStateToProps)(UserRoute);
