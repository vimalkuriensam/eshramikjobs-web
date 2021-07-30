import React from "react";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import SubscriptionList from "./container/SubscriptionList";

const ExpiredSubscription = () => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        title="Expired Subscription"
        value={25}
        variant="secondary"
        id="expired-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Expired Companies</Title>
      </div>
      <SubscriptionList />
    </section>
  );
};

export default ExpiredSubscription;
