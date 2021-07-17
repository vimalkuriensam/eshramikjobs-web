import React from "react";
import Title from "../../../components/atoms/Title";

import CompanyListings from "../../../components/organisms/CompanyListings";
import WorkListings from "../../../components/organisms/JobListings";

const Samples = () => {
  return (
    <section className="section-home-samples">
      <div className="home__sampleContainer">
        <div className="home__sampleJobs">
          <Title variant="pr-30-1">Recent jobs</Title>
          <WorkListings />
        </div>
        <div className="home__sampleCompany">
          <Title variant="pr-30-1">Companies</Title>
          <CompanyListings />
        </div>
      </div>
    </section>
  );
};

export default Samples;
