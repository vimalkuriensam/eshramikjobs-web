import React from "react";
import BlacklistComponent from "../../hoc/BlacklistComponent";
import { USER_ROUTE_TYPES } from "../../utils/data";
import Image from "../atoms/Image";

const RecruiterHeader = () => {
  const onSetHome = () => {};
  return (
    <div className="recruiterHeader">
      <Image
        onIconClick={onSetHome}
        name="Logo"
        className="adminHeader__logo"
      />
    </div>
  );
};

export default BlacklistComponent(RecruiterHeader)([
  ...USER_ROUTE_TYPES.admin,
  ...USER_ROUTE_TYPES.user,
  ...USER_ROUTE_TYPES.default,
]);
