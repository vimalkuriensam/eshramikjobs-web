import React from "react";

import Icon from "./Icon";

const Button = ({
  variant = "1",
  content = "Default",
  onButtonClick,
  className,
  ...rest
}) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={onButtonClick}
      {...rest}
    >
      {(variant == 3 || variant == 4) && (
        <span className="btn__icon">
          <Icon name="Plus" />
        </span>
      )}
      {content && <span>{content}</span>}
    </button>
  );
};

export default Button;
