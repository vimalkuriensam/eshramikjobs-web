import React from "react";

import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

const Search = ({
  onHandleSearch,
  value,
  className,
  variant = "1",
  placeholder = "Search Now",
}) => (
  <div className={`form__search form__search--${variant} ${className}`}>
    {variant === "1" && <Icon name="Search" className="form__search--icon" />}
    <Input
      variant={variant}
      className="form__search--input"
      value={value}
      onHandleText={onHandleSearch}
      placeholder={placeholder}
    />
    {variant === "2" ||
      (variant == "5" && (
        <Icon name="Search" className={`form__search--icon${variant}`} />
      ))}
  </div>
);

export default Search;
