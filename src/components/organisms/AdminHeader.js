import React from "react";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Search from "../molecules/Search";

const AdminHeader = () => {
  return (
    <div className="adminHeader">
      <div className="adminHeader__logoBox">
        <Image name="Logo" className="adminHeader__logo" />
      </div>
      <div className="adminHeader__contentMain">
        <Text variant="pr-18-1">Dashboard</Text>
        <div className="adminHeader__contentMain--right">
          <Search variant="5" placeholder="" />
          <Icon name="Bell" />
          <div className="adminHeader__userBox">
            <Icon name="User" className="adminHeader__userIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
