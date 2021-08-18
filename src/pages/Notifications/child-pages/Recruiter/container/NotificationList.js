import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import ToolTip from "../../../../../components/molecules/ToolTip";
import TableContainer from "../../../../../components/organisms/TableContainer";
import { handleJobNotificationStatus } from "../../../../../redux/actions/jobs.action";

const NotificationList = ({ notifications = [], dispatch }) => {
  const onHandleJobStatus = (id, type) =>
    dispatch(handleJobNotificationStatus({ id, type }));

  return (
    <TableContainer
      title=" "
      contentCheck={{
        sort: true,
        type: false,
        action: false,
      }}
    >
      {notifications.map((notification, index) => (
        <div
          className={`a-row notification__rows ${
            index % 2 == 0
              ? "notification__rows--light"
              : "notification__rows--dark"
          }`}
          key={index}
        >
          <div className="col-a-1-of-10">
            <Image
              name={notification.job_data.logo}
              className="notification__logo"
              type="binary"
            />
          </div>
          <div className="col-a-5-of-10">
            <ToolTip>
              <Text variant="pl-16-1" className="notification__rows--content">
                Recieved job posting from {notification.company_name}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-10">
            <ToolTip>
              <Text variant="pm-16-1" className="notification__rows--content">
                {moment(+notification.cr_date).format("DD/MM/YYYY")}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-1-of-10">
            <ToolTip>
              <Text variant="pm-16-1" className="notification__rows--content">
                {moment(+notification.cr_date).format("HH:MM")}
              </Text>
            </ToolTip>
          </div>
          <div className="col-a-2-of-10">
            <div className="notification__rows--content">
              <Button
                content="Approve"
                variant="1-2"
                onButtonClick={onHandleJobStatus.bind(
                  this,
                  notification.jobId,
                  "approve"
                )}
              />
              <Button
                content="Delete"
                variant="1-5"
                className="u-margin-left-5"
                onButtonClick={onHandleJobStatus.bind(
                  this,
                  notification.jobId,
                  "delete"
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.jobs.notificationJobs.map((notification) => ({
    ...notification,
    job_data: JSON.parse(notification.job_data),
  })),
});

export default connect(mapStateToProps)(NotificationList);
