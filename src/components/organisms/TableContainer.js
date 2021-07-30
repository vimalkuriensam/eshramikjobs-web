import React from "react";
import Dropdown from "../atoms/Dropdown";
import Title from "../atoms/Title";

const TableContainer = ({ title = null }) => {
  return (
    <div className="table__container">
      <div className="u-space-between">
        <Title variant="pm-17-1">{title}</Title>
        <div>
          <div className="table__sort">
            <Title variant="pr-15-1">Sort by</Title>
            <Dropdown
              className="table__dropdown"
              contents={["Education", "Age", "Name"]}
            />
          </div>
          <span className="u-cursor-pointer">
            <Title variant="pr-15-2">View all</Title>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
