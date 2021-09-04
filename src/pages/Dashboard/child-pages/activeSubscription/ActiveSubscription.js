import React, { useEffect } from "react";
import { connect } from "react-redux";

import Title from "../../../../components/atoms/Title";
import SubscriptionBox from "../../../../components/organisms/SubscriptionBox";
import { getCompanyList } from "../../../../redux/actions/admin.action";
import { SUBSCRIPTION_TYPES } from "../../../../utils/data";
import SubscriptionList from "./container/SubscriptionList";

const ActiveSubscription = ({ dispatch }) => {
  useEffect(() => {
    dispatch(
      getCompanyList({
        type: SUBSCRIPTION_TYPES.active,
        pagination: { page: 0, count: 6 },
      })
    );
  }, []);
  return (
    <section className="section-dashboard">
      <SubscriptionBox
        type="large"
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

export default connect()(ActiveSubscription);
