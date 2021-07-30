import React from "react";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";

const ExpiredSubscription = () => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        title="Expired Subscription"
        value={25}
        variant="secondary"
        id="expired-subscription"
      />
      <div className="u-margin-top-50 u-space-between">
        <Title variant="pr-24-2">Expired Companies</Title>
      </div>
    </section>
  );
};

export default ExpiredSubscription;
