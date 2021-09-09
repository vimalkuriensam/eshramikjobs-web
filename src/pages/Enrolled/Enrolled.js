import React, { useState } from "react";
import { connect } from "react-redux";

import Title from "../../components/atoms/Title";
import { funcMap, SUBSCRIPTION_TYPES } from "../../utils/data";
import SubscriptionList from "./container/SubscriptionList";

const Enrolled = ({ lists = [], totalSubscriptions = 0, dispatch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onHandleSubscription = async ({ selected }) => {
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const response = await funcMap["enrolled"](dispatch, selected, false);
    if (response) setIsLoading(false);
  };
  return (
    <section className="section-dashboard">
      <div className="u-margin-bottom-40 u-space-between">
        <Title variant="pr-24-2">Enrolled Companies</Title>
      </div>
      <SubscriptionList
        lists={lists}
        totalSubscriptions={totalSubscriptions}
        onHandlePageChange={onHandleSubscription}
        isLoading={isLoading}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  lists: state.admin.subscriptionValue[SUBSCRIPTION_TYPES.all],
  totalSubscriptions:
    state.admin.pages.subscriptionTotal[SUBSCRIPTION_TYPES.all],
});

export default connect(mapStateToProps)(Enrolled);
