import React from "react";
import NotificationList from "./container/NotificationList";
import { DEFAULT_NOTIFICATION_LIST } from "./data";

const Recruiter = () => {
  return (
    <section className="section-dashboard">
      <NotificationList notifications={DEFAULT_NOTIFICATION_LIST} />
    </section>
  );
};

export default Recruiter;
