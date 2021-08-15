import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import useWindowSize from "../../hooks/WindowSize";
import Icon from "../atoms/Icon";

const Drawer = ({ children }) => {
  const { width } = useWindowSize();
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onHandleDrawerState = (e) => {
    e.stopPropagation();
    setIsDrawerOpen((prevState) => !prevState);
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
          {isDrawerOpen && <div className="header__menuDrawer">{children}</div>}
          {isDrawerOpen && (
            <div onClick={onHandleDrawerState} className="header__menuWrapper">
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
