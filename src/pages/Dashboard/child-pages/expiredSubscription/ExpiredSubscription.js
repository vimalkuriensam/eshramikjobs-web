import React from "react";
import { connect } from "react-redux";
import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import { SUBSCRIPTION_TYPES } from "../../../../utils/data";
import SubscriptionList from "./container/SubscriptionList";

const ExpiredSubscription = ({ percentage, lists }) => {
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        type="large"
        title="Expired Subscription"
        value={percentage}
        variant="secondary"
        id="expired-subscription"
      />
      <div className="u-margin-top-50 u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Expired Companies</Title>
      </div>
      <SubscriptionList lists={lists} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  percentage: state.admin.subscriptions.expired,
  lists: state.admin.subscriptionValue[SUBSCRIPTION_TYPES.expire],
});

export default connect(mapStateToProps)(ExpiredSubscription);
