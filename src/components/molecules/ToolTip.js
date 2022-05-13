import React from "react";

const ToolTip = ({ children, position = "top" }) => {
  return (
    <div className="form__tooltip">
      <div className="form__tooltipContent">
        {children}
        <div className={`form__tooltipText form__tooltipText--${position}`}>
          {children.props.children}
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
