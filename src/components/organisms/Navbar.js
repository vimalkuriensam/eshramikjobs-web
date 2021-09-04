import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import BlacklistComponent from "../../hoc/BlacklistComponent";

import { funcMap, NAVBAR_NAVS, USER_ROUTE_TYPES } from "../../utils/data";
import history from "../../utils/history";

const NavBar = ({ dispatch }) => {
  const { pathname } = location;

  const onHandleNavs = (type, link) => {
    switch (type) {
      case "link":
        history.push(link);
        break;
      case "process":
        return funcMap[link](dispatch);
    }
  };
  return (
    <div className="navbar">
      {NAVBAR_NAVS.map((nav, index) => (
        <span
          key={index}
          onClick={onHandleNavs.bind(this, nav.type, nav.link)}
          className={`navbar__nav ${
            pathname.split("/").some((val) => `/${val}` == nav.to)
              ? "navbar__nav--active"
              : null
          }`}
        >
          {nav.text}
        </span>
      ))}
    </div>
  );
};

export default withRouter(
  BlacklistComponent(connect()(NavBar))([
    ...USER_ROUTE_TYPES.user,
    ...USER_ROUTE_TYPES.recruiter,
    ...USER_ROUTE_TYPES.default,
  ])
);
