import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Icon from "../../../../components/atoms/Icon";
import Image from "../../../../components/atoms/Image";
import Text from "../../../../components/atoms/Text";
import { setLogout } from "../../../../redux/actions/authentication.action";

import Details from "./container/Details";

const CompanyProfile = ({ dispatch }) => {
  const onSetHome = () => {};

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
    <div>
      <div className="recruiterHeader">
        <Image
          onIconClick={onSetHome}
          name="Logo"
          className="adminHeader__logo"
        />
        <div className="adminHeader__userBox">
          <Icon
            name="User"
            onIconClick={onHandleIconClick}
            className="adminHeader__userIcon"
          />
        </div>
        {profileState && profilePopup()}
      </div>
      <section className="section-company-profile">
        <Image name="hexagon" className="authentication__hexagon1" />
        <Image name="hexagon" className="authentication__hexagon2" />
        <Details />
      </section>
    </div>
  );
};

export default connect()(CompanyProfile);
