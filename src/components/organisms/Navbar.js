import React from "react";
import { NavLink } from "react-router-dom";
import WhitelistComponent from "../../hoc/WhitelistComponent";
import { NAVBAR_NAVS } from "../../utils/data";

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

export default WhitelistComponent(NavBar)(["/dashboard"]);
