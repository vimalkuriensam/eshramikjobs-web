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
      {(variant == 2 || variant == 3) && (
        <span className="btn__icon">
          <Icon name={icon} />
        </span>
      )}
      {content && <span>{content}</span>}
    </button>
  );
};

export default Button;
