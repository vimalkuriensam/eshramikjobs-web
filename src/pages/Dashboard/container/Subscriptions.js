import React, { useState } from "react";

import SubscriptionBox from "../../../components/organisms/SubscriptionBox";
import history from "../../../utils/history";
import { SUBSCRIPTION_GROUP } from "../data";

const Subscriptions = ({ active = 0, expired = 0, trial = 0 }) => {
  const [subscriptionValues, setSubscriptionValues] = useState({
    active,
    expired,
    trial,
  });
  const onHandleSubscription = (value) => history.push(value);

  const getStatusValue = (type) => subscriptionValues[type];

  return (
    <div>
      <div className="row">
        {SUBSCRIPTION_GROUP.map((subscription, index) => (
          <div className="col-1-of-3" key={index}>
            <SubscriptionBox
              title={subscription.title}
              value={getStatusValue(subscription.id)}
              variant={subscription.variant}
              id={subscription.id}
              onHandleView={onHandleSubscription.bind(
                this,
                subscription.action
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
