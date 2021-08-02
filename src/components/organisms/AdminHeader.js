import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { setLogout } from "../../redux/actions/authentication.action";
import history from "../../utils/history";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Search from "../molecules/Search";

const AdminHeader = ({ dispatch }) => {
  const onSetHome = () => history.push("/");
  const adminPopupRef = useRef();
  const handler = (event) => {
    if (!adminPopupRef.current?.contains(event.target)) setProfileState(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handler);
  });

  const [profileState, setProfileState] = useState(false);

  const onHandleIconClick = () => setProfileState((prevState) => !prevState);

  const profilePopup = () => {
    return (
      <div className="adminHeader__dropdown" ref={adminPopupRef}>
        <span onClick={() => dispatch(setLogout())}>
          <Text variant="pl-12-1">Logout</Text>
        </span>
      </div>
    );
  };
  return (
    <div className="adminHeader">
      <div className="adminHeader__logoBox">
        <Image
          onIconClick={onSetHome}
          name="Logo"
          className="adminHeader__logo"
        />
      </div>
      <div className="adminHeader__contentMain">
        <Text variant="pr-18-1">Dashboard</Text>
        <div className="adminHeader__contentMain--right">
          <Search variant="5" placeholder="" />
          <Icon name="Bell" />
          <div className="adminHeader__userBox">
            <Icon
              name="User"
              onIconClick={onHandleIconClick}
              className="adminHeader__userIcon"
            />
          </div>
        </div>
      </div>
      {profileState && <span>{profilePopup()}</span>}
    </div>
  );
};

export default connect()(AdminHeader);
