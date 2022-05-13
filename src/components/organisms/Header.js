import React, { useEffect, useRef, useState } from "react";

import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginState } from "../../redux/actions/utils.action";
import history from "../../utils/history";
import { Fragment } from "react";
import { funcMap, HEADER_CONTENTS, PROFILE_CONTENTS } from "../../utils/data";

import Drawer from "./Drawer";

const Header = ({ dispatch, isLogged }) => {
  const { pathname } = location;
  const handler = (event) => {
    if (!popupRef.current?.contains(event.target)) setProfileState(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handler);
  });

  const [profileState, setProfileState] = useState(false);
  const popupRef = useRef();
  const onSetLogin = () => dispatch(loginState({ state: true }));
  const onSetSignup = () => history.push("/register");
  const onSetHome = () => history.push("/");

  const onHandleProfileState = () => setProfileState((prevState) => !prevState);

  const onHandleProfileAction = async (content) => {
    switch (content.type) {
      case "process":
        const response = await funcMap[content.to](dispatch);
        if (response) setProfileState(false);
        break;
      default:
        setProfileState(false);
        history.push(content.to);
    }
  };

  const onHandleHeaderNav = (type, to) => {
    switch (type) {
      case "link":
        return history.push(to);
      case "process":
        return funcMap[to](dispatch, 0, true);
      default:
        return history.push(to);
    }
  };

  const profilePopup = () => (
    <div className="header__profileContainer" ref={popupRef}>
      <div className="header__profileCaret">&nbsp;</div>
      {PROFILE_CONTENTS.rows.map((rContent, index) => (
        <div className="row header__profileLists" key={index}>
          {rContent.columns.map((cContent, idx) => (
            <div
              className={`col-1-of-${rContent.columns.length} header__profileList`}
              key={idx}
              onClick={onHandleProfileAction.bind(this, cContent)}
            >
              <Text variant="pl-12-1">{cContent.text}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  return (
    <div className="header">
      <div className="header__logo-box">
        <Image onIconClick={onSetHome} className="header__logo" name="Logo" />
      </div>
      <Drawer>
        <Fragment>
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
          {isLogged && (
            <Fragment>
              {HEADER_CONTENTS.map((content, index) => (
                <span
                  key={index}
                  onClick={onHandleHeaderNav.bind(
                    this,
                    content.type,
                    content.to
                  )}
                  className={`${content.className} ${
                    pathname == content.link ? content.activeClassName : null
                  }`}
                >
                  {content.text}
                </span>
              ))}
              <span className="u-position-relative">
                <span onClick={onHandleProfileState}>
                  <Text variant="pr-18-1" className="u-cursor-pointer">
                    Profile
                  </Text>
                </span>
                {profileState && <span>{profilePopup()}</span>}
              </span>
            </Fragment>
          )}
          {!isLogged && (
            <Fragment>
              <Button
                variant="1-1"
                content="Recruiter Login"
                onButtonClick={onHandleProfileAction.bind(this, {
                  type: "link",
                  to: "/register/admin",
                })}
              />
              <Button
                variant="1-1"
                onButtonClick={onSetLogin}
                content="User Login"
              />
              <Button
                variant="1-1"
                content="Signup"
                onButtonClick={onSetSignup}
              />
            </Fragment>
          )}
        </Fragment>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: !!state.auth.accessToken,
});

export default withRouter(connect(mapStateToProps)(Header));
