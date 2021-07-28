import React from "react";

import SubscriptionBox from "../../../components/organisms/SubscriptionBox";

const Subscriptions = () => {
  return (
    <div>
      <div className="row">
        <div className="col-1-of-3">
          <SubscriptionBox title="Active Subscription" value={50} />
        </div>
        <div className="col-1-of-3">
          <SubscriptionBox title="Expired Subscription" value={25} />
        </div>
        <div className="col-1-of-3">
          <SubscriptionBox title="Free Trial" value={5} />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
