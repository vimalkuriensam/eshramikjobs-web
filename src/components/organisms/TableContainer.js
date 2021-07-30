import React from "react";
import Dropdown from "../atoms/Dropdown";
import Icon from "../atoms/Icon";
import Title from "../atoms/Title";

const TableContainer = ({ title = null, children }) => {
  return (
    <div className="table__container">
      <div className="u-space-between">
        <Title variant="pm-17-1">{title}</Title>
        <div className="table__container--properties">
          <div className="table__sort">
            <Title variant="pr-15-1">Sort by</Title>
            <Dropdown
              className="table__dropdown"
              contents={["Education", "Age", "Name"]}
            />
          </div>
          <div className="table__listType">
            <span className="table__listType--selected">
              <Icon name="List" />
            </span>
            <span>
              <Icon name="Grid" className="table__listType--grid" />
            </span>
          </div>
          <span className="u-cursor-pointer">
            <Title variant="pr-15-2">View all</Title>
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TableContainer;
