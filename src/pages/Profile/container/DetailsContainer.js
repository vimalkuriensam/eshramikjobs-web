import React, { forwardRef } from "react";
import Icon from "../../../components/atoms/Icon";
import Title from "../../../components/atoms/Title";

const DetailsContainer = forwardRef(
  ({ title, children, onHandleEdit }, ref) => {
    return (
      <div className="profile__detailsWrapper" ref={ref}>
        <div>
          <Title variant="pr-19-1">{title}</Title>
        </div>
        <div className="profile__icon">
          <Icon onIconClick={onHandleEdit} name="Pen" />
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

export default DetailsContainer;
