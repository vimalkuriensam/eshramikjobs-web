import React, { useEffect, useRef } from "react";

import Text from "./Text";

const Checkbox = ({ title, id, checkBoxInput, value = false }) => {
  const checkRef = useRef(null);

  const onHandleInputChange = () =>
    checkBoxInput({ target: { value: checkRef.current.checked } });
  return (
    <div className="form__checkbox-1">
      <input
        type="checkbox"
        id={id}
        value={value}
        className="form__checkbox-1--input"
        ref={checkRef}
        onChange={onHandleInputChange}
      />
      <label htmlFor={id} className="form__checkbox-1--label">
        <Text variant="r-14-400-1">{title}</Text>
        <div className="form__checkbox-1--container">&nbsp;</div>
      </label>
    </div>
  );
};

export default Checkbox;
