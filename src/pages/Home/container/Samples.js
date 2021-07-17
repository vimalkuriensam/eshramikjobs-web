import React from "react";
import { connect } from "react-redux";
import Title from "../../../components/atoms/Title";

import CompanyListings from "../../../components/organisms/CompanyListings";
import WorkListings from "../../../components/organisms/JobListings";

const Samples = ({ jobs }) => {
  return (
    <section className="section-home-samples">
      <div className="home__sampleContainer">
        <div className="home__sampleJobs">
          <Title className="u-margin-bottom-50" variant="pr-30-1">
            Recent jobs
          </Title>
          <WorkListings jobs={jobs} />
        </div>
        <div className="home__sampleCompany">
          <Title variant="pr-30-1">Companies</Title>
          <CompanyListings />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.recent,
});

export default connect(mapStateToProps)(Samples);
