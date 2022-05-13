import React from "react";

import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import Title from "../../../../../components/atoms/Title";
import ToolTip from "../../../../../components/molecules/ToolTip";
import TableContainer from "../../../../../components/organisms/TableContainer";

const SubscriptionList = ({ lists=[] }) => {
  return (
    <TableContainer contentCheck={{ sort: false, action: false, type: false }}>
      <div className="a-row">
        <div className="col-a-1-of-6 u-text-center">&nbsp;</div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Company Name</Title>{" "}
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Plan Status</Title>
        </div>
        <div className="col-a-3-of-6 u-text-center">&nbsp;</div>
      </div>
      {lists.map((subscription, index) => (
        <div className="a-row dashboard__rows1" key={index}>
          <div className="col-a-1-of-6 u-text-center">
            <Image name={subscription.companyLogo} type="binary" className="dashboard__logo-2" />
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText u-margin-top-10">
                {subscription.companyName}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <Text variant="pl-17-1" className="dashboard__tableText u-margin-top-10">
              Expired
            </Text>
          </div>
          <div className="col-a-3-of-6 u-text-center">&nbsp;</div>
        </div>
      ))}
    </TableContainer>
  );
};

export default SubscriptionList;
