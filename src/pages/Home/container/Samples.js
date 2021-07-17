import React from "react";
import { connect } from "react-redux";
import Title from "../../../components/atoms/Title";

import CompanyListings from "../../../components/organisms/CompanyListings";
import WorkListings from "../../../components/organisms/JobListings";
import Profile from "./Profile";

const Samples = ({ jobs, companies, isLogged }) => {
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
          {isLogged && (
            <div data-aos="fade-left">
              <Profile />
            </div>
          )}
          <Title variant="pr-30-1" className="u-margin-bottom-50">
            Companies
          </Title>
          <CompanyListings companies={companies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLogged: !!state.auth.accessToken,
  jobs: state.jobs.recent,
  companies: state.jobs.companies,
});

export default connect(mapStateToProps)(Samples);
