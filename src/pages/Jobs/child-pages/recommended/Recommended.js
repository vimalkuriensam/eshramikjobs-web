import React from "react";
import Icon from "../../../../components/atoms/Icon";
import Title from "../../../../components/atoms/Title";

const Recommended = () => {
  return (
    <section className="section-home-samples">
      <div className="home__sampleContainer">
        <div className="home__sampleJobs">
          <Title className="u-margin-bottom-50" variant="pr-30-1">
            Recommended jobs
          </Title>
          <div className="jobs__jobsLogo">
            <Icon name="BriefCaseColor" />
          </div>
        </div>
        <div className="home__sampleCompany">
          <Title variant="pr-30-1" className="u-margin-bottom-50">
            Companies
          </Title>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
