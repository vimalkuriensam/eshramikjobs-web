import React from "react";

import Radio from "../atoms/Radio";

const RadioGroup = ({ contents, value, className, onHandleRadioClick }) => {
  const rows = [...Array(Math.ceil(contents.length / 3))];
  const radioRows = rows.map((row, index) =>
    contents.slice(index * 3, index * 3 + 3)
  );
  console.log(radioRows);
  return (
    <div className={`form__radioGroup ${className}`}>
      {radioRows.map((contents, index) => (
        <div key={index} className="form__radioRows">
          {contents.map((content, idx) => (
            <Radio
              value={content.id === value}
              key={idx}
              {...content}
              onHandleRadioClick={onHandleRadioClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
