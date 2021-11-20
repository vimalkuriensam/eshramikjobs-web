import React from "react";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import BarGraph from "../../../components/molecules/BarGraph";

const SalesTable = ({ sales = [] }) => {
  const revenue = sales.reduce((a, b) => a + +b.price, 0);
  return (
    <div className="dashboard__tableContainer" style={{ width: "70%" }}>
      <div className="dashboard__salesHeader">
        <div className="dashboard__salesTitle">
          <Title variant="pm-17-1">Sales</Title>
          <Title variant="pr-17-5">Revenue {revenue / 1000}K</Title>
        </div>
        <div className="dashboard__salesCTA">
          <Text variant="pr-14-2">3 days</Text>
          <Text variant="pr-14-2">7 days</Text>
        </div>
      </div>
      {sales && <BarGraph id="sales-bar-graph" data={sales} />}
    </div>
  );
};

export default SalesTable;
