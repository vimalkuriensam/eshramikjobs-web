import React, { Children, cloneElement, forwardRef, useRef } from "react";
import Icon from "../../../components/atoms/Icon";
import Title from "../../../components/atoms/Title";

const DetailsContainer = forwardRef(({ title, children }, ref) => {
  const refHandle = useRef(null);
  const child = Children.map(children, (child, index) =>
    cloneElement(child, {
      ref: refHandle,
    })
  );

  const onHandleEdit = () => refHandle.current.onHandleEdit();
  return (
    <div className="profile__detailsWrapper" ref={ref}>
      <div>
        <Title variant="pr-19-1">{title}</Title>
      </div>
      <div className="profile__icon">
        <Icon onIconClick={onHandleEdit} name="Pen" />
      </div>
      <div>{child}</div>
    </div>
  );
});

export default DetailsContainer;
