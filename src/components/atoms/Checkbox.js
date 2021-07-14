import React, { useEffect, useRef } from "react";

import Text from "./Text";

const Checkbox = ({
  children,
  variant = "1",
  id,
  checkBoxInput,
  className,
  value = false,
}) => {
  const checkRef = useRef(null);

  const onHandleInputChange = () =>
    checkBoxInput({ target: { value: checkRef.current.checked } });
  return (
    <div className={`form__checkbox-1 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={value}
        className="form__checkbox-1--input"
        ref={checkRef}
        onChange={onHandleInputChange}
      />
      <label htmlFor={id} className="form__checkbox-1--label">
        {variant == 1 && <Text variant="r-14-400-1">{children}</Text>}
        <div className="form__checkbox-1--container">&nbsp;</div>
        {variant != 1 && <Text variant="r-14-400-1">{children}</Text>}
      </label>
    </div>
  );
};

export default Checkbox;
