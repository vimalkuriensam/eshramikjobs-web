import React from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_NAVS } from "../../utils/data";

const NavBar = () => {
  return (
    <div className="navbar">
      {NAVBAR_NAVS.map((nav) => (
        <NavLink
          to={nav.to}
          className="navbar__nav"
          activeClassName="navbar__nav--active"
        >
          {nav.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
