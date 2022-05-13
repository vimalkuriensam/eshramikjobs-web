import React from "react";
import { connect } from "react-redux";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import { SUBSCRIPTION_TYPES } from "../../../../utils/data";
import SubscriptionList from "./container/SubscriptionList";

const TrialSubscription = ({ percentage, lists = [] }) => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        type="large"
        title="Trial Subscription"
        value={percentage}
        variant="tertiary"
        id="trial-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Trial Companies</Title>
      </div>
      <SubscriptionList lists={lists} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  percentage: state.admin.subscriptions.trial,
  lists: state.admin.subscriptionValue[SUBSCRIPTION_TYPES.trial],
});

export default connect(mapStateToProps)(TrialSubscription);
