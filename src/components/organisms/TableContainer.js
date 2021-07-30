import React from "react";
import Dropdown from "../atoms/Dropdown";
import Icon from "../atoms/Icon";
import Title from "../atoms/Title";

const TableContainer = ({
  title = null,
  className,
  children,
  contentCheck = {
    sort: true,
    type: true,
    action: true,
  },
}) => {
  return (
    <div className={`table__container ${className}`}>
      <div className="u-space-between">
        {title && <Title variant="pm-17-1">{title}</Title>}
        {Object.values(contentCheck).some((val) => !!val) && (
          <div className="table__container--properties">
            {contentCheck.sort && (
              <div className="table__sort">
                <Title variant="pr-15-1">Sort by</Title>
                <Dropdown
                  className="table__dropdown"
                  contents={["Education", "Age", "Name"]}
                />
              </div>
            )}
            {contentCheck.type && (
              <div className="table__listType">
                <span className="table__listType--selected">
                  <Icon name="List" />
                </span>
                <span>
                  <Icon name="Grid" className="table__listType--grid" />
                </span>
              </div>
            )}
            {contentCheck.action && (
              <span className="u-cursor-pointer">
                <Title variant="pr-15-2">View all</Title>
              </span>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default TableContainer;
