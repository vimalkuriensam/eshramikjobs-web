import React, { useState } from "react";
import { connect } from "react-redux";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import BarGraph from "../../../components/molecules/BarGraph";
import { DAY_SETTINGS } from "../data";

const Sales = ({ dispatch, sales = [] }) => {
  const [daySetting, setDaySettings] = useState(DAY_SETTINGS[1]);
  const salesCopy = sales.slice(0, daySetting);
  const revenue = salesCopy.reduce((a, b) => a + +b.price, 0);
  const onHandleDaySetting = (days) => {
    if (days !== daySetting) setDaySettings(days);
  };
  return (
    <div className="dashboard__tableContainer">
      <div className="dashboard__salesHeader">
        <div className="dashboard__salesTitle">
          <Title variant="pm-17-1">Sales</Title>
          <Title variant="pr-17-5">Revenue {revenue / 1000}K</Title>
        </div>
        <div className="dashboard__salesCTA">
          <Text
            variant="pr-14-2"
            className={`${
              daySetting == DAY_SETTINGS[0]
                ? "dashboard__salesCTA--activeDay"
                : "dashboard__salesCTA--inactiveDay"
            }`}
          >
            <span onClick={onHandleDaySetting.bind(this, DAY_SETTINGS[0])}>
              {DAY_SETTINGS[0]} days
            </span>
          </Text>
          <Text
            variant="pr-14-2"
            className={`${
              daySetting == DAY_SETTINGS[1]
                ? "dashboard__salesCTA--activeDay"
                : "dashboard__salesCTA--inactiveDay"
            }`}
          >
            <span onClick={onHandleDaySetting.bind(this, DAY_SETTINGS[1])}>
              {DAY_SETTINGS[1]} days
            </span>
          </Text>
        </div>
      </div>
      <BarGraph id="sales-graph" data={salesCopy} />
    </div>
  );
};

export default connect()(Sales);
