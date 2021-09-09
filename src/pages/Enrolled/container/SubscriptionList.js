import React from "react";
import moment from "moment";

import TableContainer from "../../../components/organisms/TableContainer";
import Title from "../../../components/atoms/Title";
import Image from "../../../components/atoms/Image";
import ToolTip from "../../../components/molecules/ToolTip";
import Text from "../../../components/atoms/Text";
import Pagination from "../../../components/organisms/Pagination";

const SubscriptionList = ({
  lists = [],
  totalSubscriptions,
  onHandlePageChange,
  isLoading = false,
}) => {
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
      {!isLoading ? (
        lists.map((subscription, index) => (
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
                  {subscription.name}
                </Text>
              </ToolTip>
            </div>
            <div className="col-a-1-of-6 u-text-center">
              <ToolTip>
                <Text
                  variant="pl-17-1"
                  className="dashboard__tableText u-margin-top-10"
                >
                  {moment(
                    moment().valueOf() + +subscription.planValidity * 1000
                  )
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
                  {+subscription.price ? subscription.price : "Free"}
                </Text>
              </ToolTip>
            </div>
          </div>
        ))
      ) : (
        <div className="dashboard__loaderMessage">Loading...</div>
      )}
      <Pagination
        total={totalSubscriptions}
        pagePerView={7}
        onHandlePageChange={onHandlePageChange}
      />
    </TableContainer>
  );
};

export default SubscriptionList;
