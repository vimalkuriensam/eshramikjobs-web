import React from "react";

import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginState } from "../../redux/actions/utils.action";
import history from "../../utils/history";

const Header = ({ dispatch }) => {
  const onSetLogin = () => dispatch(loginState({ state: true }));
  const onSetSignup = () => history.push("/register");
  const onSetHome = () => history.push("/");
  return (
    <div className="header">
      <div className="header__logo-box">
        <Image onIconClick={onSetHome} className="header__logo" name="Logo" />
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
        <Button variant="1-1" onButtonClick={onSetLogin} content="Login" />
        <Button variant="1-1" content="Signup" onButtonClick={onSetSignup} />
      </div>
    </div>
  );
};

export default connect()(Header);
