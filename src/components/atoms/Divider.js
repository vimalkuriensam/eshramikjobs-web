import React from "react";

const Divider = ({ className, style, color, height }) => {
  return (
    <div
      className={`form__divider ${className}`}
      style={{ ...style, color, height }}
    >
      <div>&nbsp;</div>
    </div>
  );
};

export default Divider;
