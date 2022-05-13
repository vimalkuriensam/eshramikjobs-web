import React from "react";

import Radio from "../atoms/Radio";

const RadioGroup = ({
  contents,
  value,
  className,
  onHandleRadioClick,
  column = 3,
}) => {
  const rows = [...Array(Math.ceil(contents.length / column))];
  const radioRows = rows.map((row, index) =>
    contents.slice(index * column, index * column + column)
  );
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
