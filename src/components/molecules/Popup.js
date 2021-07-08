import React, { useRef } from "react";

import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import Divider from "../atoms/Divider";

const Popup = ({
  children,
  transition = { horizontal: null, vertical: null },
  onClosePopup,
  title,
  className,
}) => {
  const onContainerPropagation = (e) => e.stopPropagation();
  const ref = useRef();
  const onHandleClose = () => {
    ref.current.className += ` popup__wrapper--${transition.horizontal}-close`;
    setTimeout(() => {
      onClosePopup();
    }, 200);
  };
  return (
    <div className="popup" onClick={onClosePopup}>
      <div
        ref={ref}
        className={`popup__wrapper ${className} popup__wrapper--${transition.horizontal} popup__wrapper--${transition.vertical}`}
        onClick={onContainerPropagation}
      >
        {title && (
          <div className="popup__title">
            <div className="popup__title--content">
              <Title variant="title-3">{title}</Title>
            </div>
            <Divider color="rgb(201, 204, 215)" height="1rem" />
          </div>
        )}
        <div className="popup__close" onClick={onHandleClose}>
          <Icon name="Close" />
        </div>
        <div className="popup__container">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
