import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import SubscriptionBox from "../../../components/organisms/SubscriptionBox";
import { getActiveStatus } from "../../../redux/actions/recruit.action";
import history from "../../../utils/history";
import { SUBSCRIPTION_GROUP } from "../data";

const Subscriptions = ({ dispatch }) => {
  const [subscriptionValues, setSubscriptionValues] = useState({
    active: 0,
    expired: 0,
    trial: 0,
  });
  const onHandleSubscription = (value) => history.push(value);
  const loadStatus = async () => {
    const result = await dispatch(getActiveStatus());
    if (result)
      setSubscriptionValues({
        active: result.activePerc,
        expired: result.expiredPerc,
        trial: result.trailPerc,
      });
  };
  const getStatusValue = (type) => subscriptionValues[type];

  useEffect(() => {
    loadStatus();
  }, []);
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

export default connect()(Subscriptions);
