import React from "react";
import { NavLink } from "react-router-dom";

import BlacklistComponent from "../../hoc/BlacklistComponent";
import { RECRUITER_NAVBAR_NAVS, USER_ROUTE_TYPES } from "../../utils/data";

const RecruiterNavbar = () => {
  return (
    <div className="recruiterNavbar">
      {RECRUITER_NAVBAR_NAVS.map((nav, index) => (
        <NavLink
          to={nav.to}
          key={index}
          className="recruiterNavbar__nav"
          activeClassName="recruiterNavbar__nav--active"
        >
          {nav.text}
        </NavLink>
      ))}
    </div>
  );
};

export default BlacklistComponent(RecruiterNavbar)([
  ...USER_ROUTE_TYPES.admin,
  ...USER_ROUTE_TYPES.user,
  ...USER_ROUTE_TYPES.default,
]);
