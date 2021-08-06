import React from "react";
import { NavLink } from "react-router-dom";
import BlacklistComponent from "../../hoc/BlacklistComponent";

import { NAVBAR_NAVS, USER_ROUTE_TYPES } from "../../utils/data";

const NavBar = () => {
  return (
    <div className="navbar">
      {NAVBAR_NAVS.map((nav, index) => (
        <NavLink
          to={nav.to}
          key={index}
          className="navbar__nav"
          activeClassName="navbar__nav--active"
        >
          {nav.text}
        </NavLink>
      ))}
    </div>
  );
};

export default BlacklistComponent(NavBar)([
  ...USER_ROUTE_TYPES.user,
  ...USER_ROUTE_TYPES.recruiter,
  ...USER_ROUTE_TYPES.default,
]);
