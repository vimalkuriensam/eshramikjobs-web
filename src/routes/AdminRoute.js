import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  dispatch,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/register/admin" />
        )
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.accessToken,
});

export default connect(mapStateToProps)(AdminRoute);
