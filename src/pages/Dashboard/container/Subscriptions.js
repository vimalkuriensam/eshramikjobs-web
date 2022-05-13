import React, { useState } from "react";
import { connect } from "react-redux";

import SubscriptionBox from "../../../components/organisms/SubscriptionBox";
import { funcMap } from "../../../utils/data";
import history from "../../../utils/history";
import { SUBSCRIPTION_GROUP } from "../data";

const Subscriptions = ({ dispatch, active = 0, expired = 0, trial = 0 }) => {
  const [subscriptionValues, setSubscriptionValues] = useState({
    active,
    expired,
    trial,
  });

  const onHandleSubscription = (value) => funcMap[value](dispatch);

  const getStatusValue = (type) => subscriptionValues[type];

  return (
    <div className="dashboard__subscriptionColumn">
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

export default connect()(Subscriptions);
