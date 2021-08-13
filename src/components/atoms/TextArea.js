import React, { useState } from "react";
import Title from "./Title";

const TextArea = ({ value, className, onHandleText, variant, ...rest }) => {
  const [texts, setTexts] = useState([]);
  const onHandleTextarea = ({ target }) => {
    const { value } = target;
    const updatedArray = value.split(/[\s,]+/).filter((val) => !!val);
    setTexts(updatedArray);
    onHandleText({ target: { value } });
  };
  if (variant == 2)
    return (
      <div className="form__textarea--groupings">
        <textarea
          {...rest}
          onChange={onHandleTextarea}
          // value={value}
          className="form__textarea form__textarea--2"
        />
        {texts.map((text, index) => (
          <span key={index} className="form__textarea--textgroup">
            <Title variant="pr-19-3">{text}</Title>
          </span>
        ))}
      </div>
    );
  return (
    <textarea
      {...rest}
      onChange={onHandleText}
      value={value}
      className={`form__textarea form__textarea--${variant} ${className}`}
    />
  );
};

export default TextArea;
