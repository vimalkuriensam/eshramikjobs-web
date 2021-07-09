import React from "react";

import Dropdown from "../atoms/Dropdown";
import Title from "../atoms/Title";

const FormDropdown = ({ title, ...rest }) => {
  return (
    <div className="form__dropdownGroup">
      <Title variant="pr-16-1" className="u-margin-bottom-10">{title}</Title>
      <Dropdown {...rest} />
    </div>
  );
};

export default FormDropdown;
