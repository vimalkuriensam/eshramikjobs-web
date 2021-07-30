import React from "react";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import Title from "../../../../../components/atoms/Title";
import ToolTip from "../../../../../components/molecules/ToolTip";
import TableContainer from "../../../../../components/organisms/TableContainer";
import { ACTIVE_SUBSCRIPTION_LIST } from "../data";

const SubscriptionList = () => {
  return (
    <TableContainer contentCheck={{ sort: false, action: false, type: false }}>
      <div className="a-row">
        <div className="col-a-1-of-6 u-text-center">&nbsp;</div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Company Name</Title>{" "}
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Plan</Title>
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Days</Title>
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">DB download</Title>
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Prize/GST</Title>
        </div>
      </div>
      {ACTIVE_SUBSCRIPTION_LIST.map((subscription, index) => (
        <div className="a-row dashboard__rows1" key={index}>
          <div className="col-a-1-of-6 u-text-center">
            <Image name={subscription.image} />
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText">
                {subscription.name}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText">
                {subscription.plan}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText">
                {subscription.days}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText">
                {subscription.dbDownload}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text variant="pl-17-1" className="dashboard__tableText">
                {subscription.price}
              </Text>
            </ToolTip>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

export default SubscriptionList;
