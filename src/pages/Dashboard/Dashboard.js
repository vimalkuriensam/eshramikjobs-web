import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActiveStatus } from "../../redux/actions/recruit.action";
import Enrollment from "./container/Enrollment";
import ResumeLists from "./container/ResumeLists";
import Sales from "./container/Sales";
import Subscriptions from "./container/Subscriptions";

const Dashboard = ({ dispatch }) => {
  useEffect(()=>{
    dispatch(getActiveStatus());
  }, [])
  return (
    <section className="section-dashboard">
      <Subscriptions />
      <div className="row u-margin-top-30">
        <div className="col-2-of-3">
          <Sales />
        </div>
        <div className="col-1-of-3">
          <Enrollment />
        </div>
      </div>
      <ResumeLists />
    </section>
  );
};

export default connect()(Dashboard);
