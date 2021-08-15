import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";

import useWindowSize from "../../hooks/WindowSize";
import Icon from "../atoms/Icon";

const Drawer = ({ children }) => {
  const { width } = useWindowSize();
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ref = useRef(null);

  const onHandleDrawerState = (e) => {
    // e.stopPropagation();
    setIsDrawerOpen((prevState) => !prevState);
  };

  const onHandleClose = (e) => {
    e.stopPropagation();
    ref.current.className += ` header__menuDrawer--close`;
    setTimeout(() => {
      onHandleDrawerState();
    }, 200);
  };
  useEffect(() => {
    if (width < 895) setIsDrawerActive(true);
    else setIsDrawerActive(false);
  }, [width]);
  return (
    <Fragment>
      {isDrawerActive ? (
        <div className="header__menuContainer" onClick={onHandleDrawerState}>
          <Icon name="Menu" className="header__menu" />
          {isDrawerOpen && (
            <div className="header__menuDrawer" ref={ref}>
              {children}
            </div>
          )}
          {isDrawerOpen && (
            <div onClick={onHandleClose} className="header__menuWrapper">
              &nbsp;
            </div>
          )}
        </div>
      ) : (
        <div className="header__actions">{children}</div>
      )}
    </Fragment>
  );
};

export default Drawer;
