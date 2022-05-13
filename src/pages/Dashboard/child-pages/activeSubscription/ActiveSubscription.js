import React from "react";
import { connect } from "react-redux";

import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import { SUBSCRIPTION_TYPES } from "../../../../utils/data";
import SubscriptionList from "./container/SubscriptionList";

const ActiveSubscription = ({ percentage, lists }) => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        type="large"
        title="Active Subscription"
        value={percentage}
        variant="primary"
        id="active-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Active Companies</Title>
      </div>
      <SubscriptionList lists={lists} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  percentage: state.admin.subscriptions.active,
  lists: state.admin.subscriptionValue[SUBSCRIPTION_TYPES.active],
});

export default connect(mapStateToProps)(ActiveSubscription);
