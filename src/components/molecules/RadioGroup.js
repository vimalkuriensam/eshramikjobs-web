import React from "react";

import Radio from "../atoms/Radio";

const RadioGroup = ({ contents, value, className, onHandleRadioClick }) => {
  return (
    <div className={`form__radioGroup ${className}`}>
      {contents.map((content, index) => (
        <Radio
          value={content.id === value}
          key={index}
          {...content}
          onHandleRadioClick={onHandleRadioClick}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
