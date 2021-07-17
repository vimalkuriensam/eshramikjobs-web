import React from "react";
import { connect } from "react-redux";
import Icon from "../../../../components/atoms/Icon";
import Title from "../../../../components/atoms/Title";
import CompanyListings from "../../../../components/organisms/CompanyListings";
import JobListings from "../../../../components/organisms/JobListings";
import Advertisement from "./container/Advertisement";
import Feedback from "./container/Feedback";

const Saved = ({ savedJobs, companies }) => {
  return (
    <div>
      <section className="section-home-samples page">
        <div className="home__sampleContainer">
          <div className="home__sampleJobs">
            <Title className="u-margin-bottom-50" variant="pr-30-1">
              saved jobs
            </Title>
            <div className="jobs__jobsLogo">
              <Icon name="BriefCaseColor" />
            </div>
            <JobListings jobs={savedJobs} />
          </div>
          <div className="home__sampleCompany">
            <Title variant="pr-30-1" className="u-margin-bottom-50">
              Companies
            </Title>
            <CompanyListings companies={companies} />
          </div>
        </div>
      </section>
      <Feedback />
      <Advertisement />
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedJobs: state.jobs.saved,
  companies: state.jobs.companies,
});

export default connect(mapStateToProps)(Saved);
