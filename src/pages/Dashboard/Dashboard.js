import React from "react";
import { connect } from "react-redux";

import Enrollment from "./container/Enrollment";
import ResumeLists from "./container/ResumeLists";
import Sales from "./container/Sales";
import Subscriptions from "./container/Subscriptions";

const Dashboard = ({ companies, subscriptions, resumes = [], sales = [] }) => {
  return (
    <section className="section-dashboard">
      <Subscriptions {...subscriptions} />
      <div className="row u-margin-top-30 dashboard__lists">
        <div className="col-2-of-3">
          <Sales sales={sales} />
        </div>
        <div className="col-1-of-3">
          <Enrollment companies={companies} />
        </div>
      </div>
      <ResumeLists resumes={resumes} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  companies: state.admin.companies,
  subscriptions: state.admin.subscriptions,
  resumes: state.admin.resumes,
  sales: state.admin.sales,
});

export default connect(mapStateToProps)(Dashboard);
