import React from "react";

import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import SubscriptionList from "./container/SubscriptionList";

const ActiveSubscription = () => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        title="Active Subscription"
        value={50}
        variant="primary"
        id="active-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Active Companies</Title>
      </div>
      <SubscriptionList />
    </section>
  );
};

export default ActiveSubscription;
