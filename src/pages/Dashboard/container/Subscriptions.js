import React from "react";

import SubscriptionBox from "../../../components/organisms/SubscriptionBox";
import history from "../../../utils/history";
import { SUBSCRIPTION_GROUP } from "../data";

const Subscriptions = () => {
  const onHandleSubscription = (value) => history.push(value);
  return (
    <div>
      <div className="row">
        {SUBSCRIPTION_GROUP.map((subscription, index) => (
          <div className="col-1-of-3" key={index}>
            <SubscriptionBox
              title={subscription.title}
              value={subscription.value}
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
