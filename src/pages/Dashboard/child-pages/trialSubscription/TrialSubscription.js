import React from "react";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import SubscriptionList from "./container/SubscriptionList";

const TrialSubscription = () => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        type="large"
        title="Trial Subscription"
        value={5}
        variant="tertiary"
        id="trial-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Trial Companies</Title>
      </div>
      <SubscriptionList />
    </section>
  );
};

export default TrialSubscription;
