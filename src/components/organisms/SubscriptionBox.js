import React from "react";

import Text from "../atoms/Text";
import Title from "../atoms/Title";

const SubscriptionBox = ({ title, value, variant }) => {
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
            <Text variant="pr-14-2">View all</Text>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
