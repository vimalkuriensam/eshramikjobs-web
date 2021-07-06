import React, { useRef } from "react";

// import Text from "./Text";

const Radio = ({ value, id, name, title, onHandleRadioClick }) => {
  const radioRef = useRef(null);
  const onHandleClick = () => onHandleRadioClick({ target: { value: id } });

  return (
    <div className="form__radio">
      <input
        type="radio"
        checked={value}
        id={id}
        name={name}
        className="form__radio--input"
        ref={radioRef}
      />
      <label
        className="form__radio--label"
        htmlFor={id}
        onClick={onHandleClick}
      >
        <div className="form__radio--button">&nbsp;</div>
        <div>{title}</div>
        {/*<Text variant="r-14-400-1">{title}</Text>*/}
      </label>
    </div>
  );
};

export default Radio;
