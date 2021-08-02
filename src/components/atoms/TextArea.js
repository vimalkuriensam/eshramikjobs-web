import React from "react";

const TextArea = ({ value, onHandleText, variant, ...rest }) => (
  <textarea
    {...rest}
    onChange={onHandleText}
    value={value}
    className={`form__textarea form__textarea--${variant}`}
  />
);

export default TextArea;
