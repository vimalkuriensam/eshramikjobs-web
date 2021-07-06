import React from "react";

import Dropdown from "../atoms/Dropdown";
import Text from "../atoms/Text";

const FormDropdown = ({ title, ...rest }) => {
  return (
    <div className="form__dropdownGroup">
      <Text variant="r-14-400-1">{title}</Text>
      <Dropdown {...rest} />
    </div>
  );
};

export default FormDropdown;
