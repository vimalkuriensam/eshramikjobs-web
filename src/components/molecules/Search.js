import React from "react";

import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

const Search = ({ onHandleSearch, value, className, variant = "1" }) => (
  <div className={`form__search form__search--${variant} ${className}`}>
    {variant === "1" && <Icon name="Search" className="form__search--icon" />}
    <Input
      variant="1"
      className="form__search--input"
      value={value}
      onHandleText={onHandleSearch}
      placeholder="Search now"
    />
    {variant === "2" && <Icon name="Search" className="form__search--icon2" />}
  </div>
);

export default Search;
