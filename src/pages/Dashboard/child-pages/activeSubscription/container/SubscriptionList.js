import moment from "moment";
import React from "react";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import Title from "../../../../../components/atoms/Title";
import ToolTip from "../../../../../components/molecules/ToolTip";
import TableContainer from "../../../../../components/organisms/TableContainer";
import { ACTIVE_SUBSCRIPTION_LIST } from "../data";

const SubscriptionList = ({ lists = [] }) => {
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
          <Title variant="pr-20-1">Time Left</Title>
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">DB download</Title>
        </div>
        <div className="col-a-1-of-6 u-text-center">
          <Title variant="pr-20-1">Prize/GST</Title>
        </div>
      </div>
      {lists.map((subscription, index) => (
        <div className="a-row dashboard__rows1" key={index}>
          <div className="col-a-1-of-6 u-text-center">
            <Image
              className="dashboard__logo-2"
              name={subscription.companyLogo}
              type="binary"
            />
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text
                variant="pl-17-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {subscription.companyName}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text
                variant="pl-17-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {subscription.planName}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text
                variant="pl-17-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {moment(moment().valueOf() + +subscription.planValidity * 1000)
                  .fromNow()
                  .replace("in a", "1 ")
                  .replace("in", "")}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text
                variant="pl-17-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {subscription.totalResumes}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-6 u-text-center">
            <ToolTip>
              <Text
                variant="pl-17-1"
                className="dashboard__tableText u-margin-top-10"
              >
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
