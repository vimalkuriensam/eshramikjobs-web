import React from "react";

import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <Image className="header__logo" name="Logo" />
      </div>
      <div className="header__actions">
        <NavLink
          className="header__link"
          activeClassName="header__link--active"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link--active"
          to="/about"
        >
          About us
        </NavLink>
        <Button variant="1-1" content="Login" />
        <Button variant="1-1" content="Signup" />
      </div>
    </div>
  );
};

export default Header;
