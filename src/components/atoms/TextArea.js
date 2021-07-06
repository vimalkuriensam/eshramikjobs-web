import React from "react";

const TextArea = ({ value, onHandleText, ...rest }) => (
  <textarea
    {...rest}
    onChange={onHandleText}
    value={value}
    className="form__textarea"
  />
);

export default TextArea;
