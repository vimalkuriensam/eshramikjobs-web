import React from "react";

import Icon from "./Icon";

const Button = ({
  variant = "1",
  content = "Default",
  onButtonClick,
  className,
  icon = "Plus",
  ...rest
}) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={onButtonClick}
      {...rest}
    >
      {[2, 3, 4].includes(+variant) && (
        <span className="btn__icon">
          <Icon name={icon} />
        </span>
      )}
      {content && <span>{content}</span>}
      {[6].includes(+variant) && (
        <span className="btn__icon">
          <Icon name={icon} />
        </span>
      )}
    </button>
  );
};

export default Button;
