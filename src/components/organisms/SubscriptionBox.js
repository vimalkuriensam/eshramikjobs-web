import React, { useEffect } from "react";
import * as d3 from "d3";

import Text from "../atoms/Text";
import Title from "../atoms/Title";

const SubscriptionBox = ({ title, value, variant, id }) => {
  useEffect(() => {
    // const svg = d3.select(`#${id}`).select("svg").width(88).height(88);
    // const g = svg.append("g");
    const value = d3.pie()([50, 50]);
    console.log(value);
  }, []);
  return (
    <div className="dashboard__subscriptionBox">
      <div className="a-row">
        <div className="col-a-35-of-50">
          <div>
            <Title variant="pr-17-3">{title}</Title>
          </div>
          <div>
            <Title variant="psm-18-1">{value}</Title>
          </div>
        </div>
        <div className="col-a-15-of-50">
          <span>
            {id && <div id={id}></div>}
            <Text variant="pr-14-2">View all</Text>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
