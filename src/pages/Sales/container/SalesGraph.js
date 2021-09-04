import React from "react";
import moment from "moment";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const SalesGraph = ({ sales = [] }) => {
  return (
    <div className="dashboard__tableContainer u-margin-top-40">
      <div className="a-row">
        <div className="col-a-1-of-3 u-text-center">
          <Title variant="pr-20-2">Date</Title>
        </div>
        <div className="col-a-1-of-3 u-text-center">
          <Title variant="pr-20-2">Day</Title>
        </div>
        <div className="col-a-1-of-3 u-text-center">
          <Title variant="pr-20-2">Revenue</Title>
        </div>
      </div>
      {sales.map((val, index) => (
        <div
          className={`a-row table__rowContent table__rowContent--${
            index % 2 == 0 ? "dark" : "light"
          }`}
          key={index}
        >
          <div className="col-a-1-of-3 u-text-center">
            <Text variant="pl-17-1">{val.date}</Text>
          </div>
          <div className="col-a-1-of-3 u-text-center">
            <Text variant="pl-17-1">{moment(val.date).format("dddd")}</Text>
          </div>
          <div className="col-a-1-of-3 u-text-center">
            <Text variant="pl-17-1">{val.price}</Text>
          </div>
        </div>
      ))}
      {
        <div className="a-row">
          <div className="col-a-1-of-3 u-text-center">&nbsp;</div>
          <div className="col-a-1-of-3 u-text-center">&nbsp;</div>
          <div className="col-a-1-of-3 u-text-center">
            <Title variant="pr-17-5">
              Total {sales.reduce((a, b) => a + +b.price, 0)}
            </Title>
          </div>
        </div>
      }
    </div>
  );
};

export default SalesGraph;
