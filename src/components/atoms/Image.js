import React from "react";

const Image = ({ name, className, onIconClick, type = "png" }) => (
  <img
    onClick={onIconClick}
    className={className}
    src={`${type == "binary" ? name : "/assets/images/" + name + "." + type}`}
  />
);

export default Image;
