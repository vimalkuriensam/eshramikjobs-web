import React, { useEffect } from "react";
import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import TableContainer from "../../../../../components/organisms/TableContainer";

const NotificationList = ({ notifications = [] }) => {
  useEffect(()=>{}, [])
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
        <div className="a-row notification__rows" key={index}>
          <div className="col-a-1-of-10">
            <Image name={notification.image} className="notification__logo" />
          </div>
          <div className="col-a-5-of-10">
            <Text variant="pl-16-1" className="notification__rows--content">
              {notification.message}
            </Text>
          </div>
          <div className="col-a-1-of-10">
            <Text variant="pm-16-1" className="notification__rows--content">
              {notification.created}
            </Text>
          </div>
          <div className="col-a-1-of-10">
            <Text variant="pm-16-1" className="notification__rows--content">
              {notification.time}
            </Text>
          </div>
          <div className="col-a-2-of-10">
            <div className="notification__rows--content">
              <Button content="Approve" variant="1-2" />
              <Button
                content="Delete"
                variant="1-5"
                className="u-margin-left-5"
              />
            </div>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

export default NotificationList;
