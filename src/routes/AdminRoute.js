import React from "react";
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
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && type == USER_TYPES.ADMIN ? (
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
  token: state.auth.accessToken,
});

export default connect(mapStateToProps)(AdminRoute);
