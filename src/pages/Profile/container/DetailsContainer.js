import React from "react";
import Icon from "../../../components/atoms/Icon";
import Title from "../../../components/atoms/Title";

const DetailsContainer = ({ title, children, onHandleEdit }) => {
  return (
    <div className="profile__detailsWrapper">
      <div>
        <Title variant="pr-19-1">{title}</Title>
      </div>
      <div className="profile__icon">
        <Icon onIconClick={onHandleEdit} name="Pen" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DetailsContainer;
