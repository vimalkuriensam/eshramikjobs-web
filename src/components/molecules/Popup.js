import React from "react";

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
  return (
    <div className="popup" onClick={onClosePopup}>
      <div
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
        <div className="popup__close" onClick={onClosePopup}>
          <Icon name="Close" />
        </div>
        <div className="popup__container">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
