import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Logout from "../components/organisms/Logout";

const UserRoute = ({
  dispatch,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const getRedirection = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, [1000]);
    return <Logout />;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : getRedirection()
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.accessToken,
});

export default connect(mapStateToProps)(UserRoute);
