import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import BlacklistComponent from "../../hoc/BlacklistComponent";
import { setLogout } from "../../redux/actions/authentication.action";
import { setNotification } from "../../redux/actions/utils.action";
import { funcMap, USER_ROUTE_TYPES } from "../../utils/data";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Search from "../molecules/Search";

const RecruiterHeader = ({
  dispatch,
  companyName,
  companyLogo = null,
  notificationCount,
}) => {
  const onSetHome = () => funcMap["home"]();
  const recruiterPopupRef = useRef();
  const handler = (event) => {
    if (!recruiterPopupRef.current?.contains(event.target))
      setProfileState(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handler);
  });

  const [profileState, setProfileState] = useState(false);

  const onHandleIconClick = () => setProfileState((prevState) => !prevState);

  const profilePopup = () => {
    return (
      <div className="adminHeader__dropdown" ref={recruiterPopupRef}>
        <span onClick={() => dispatch(setLogout())}>
          <Text variant="pl-12-1">Logout</Text>
        </span>
      </div>
    );
  };

  return (
    <div className="recruiterHeader">
      <Image
        onIconClick={onSetHome}
        name="Logo"
        className="adminHeader__logo"
      />
      <div className="adminHeader__contentMain--right">
        <Search variant="5" placeholder="" />
        <span className="u-position-relative">
          <Icon name="Bell" className="adminHeader__notificationIcon" />
          {notificationCount > 0 && (
            <div className="adminHeader__notificationCount">
              {notificationCount}
            </div>
          )}
        </span>
        <Title variant="pr-16-1">{companyName}</Title>
        <div className="adminHeader__userBox">
          {companyLogo ? (
            <span onClick={onHandleIconClick}>
              <Image
                type="binary"
                name={companyLogo}
                className="recruiterHeader__userLogo"
              />
            </span>
          ) : (
            <Icon
              name="User"
              onIconClick={onHandleIconClick}
              className="adminHeader__userIcon"
            />
          )}
        </div>
      </div>
      {profileState && profilePopup()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyName: state.recruiter.name,
  companyLogo: state.recruiter.logo,
  notificationCount: state.utils.notification,
});

export default connect(mapStateToProps)(
  BlacklistComponent(RecruiterHeader)([
    ...USER_ROUTE_TYPES.admin,
    ...USER_ROUTE_TYPES.user,
    ...USER_ROUTE_TYPES.default,
  ])
);
