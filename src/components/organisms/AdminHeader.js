import React from "react";
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
          <Search variant="1" />
          <div className="adminHeader__userBox">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
