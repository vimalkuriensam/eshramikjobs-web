import React from "react";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";

const TrialSubscription = () => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        title="Trial Subscription"
        value={5}
        variant="tertiary"
        id="trial-subscription"
      />
      <div className="u-margin-top-50 u-space-between">
        <Title variant="pr-24-2">Trial Companies</Title>
      </div>
    </section>
  );
};

export default TrialSubscription;
