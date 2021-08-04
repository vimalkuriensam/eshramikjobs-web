import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../../../components/atoms/Button";
import Icon from "../../../../components/atoms/Icon";
import Image from "../../../../components/atoms/Image";
import Text from "../../../../components/atoms/Text";
import Title from "../../../../components/atoms/Title";
import history from "../../../../utils/history";
import { DUMMY_SKILLS } from "./data";

const Detail = ({ detail }) => {
  useEffect(() => {
    if (Object.keys(detail).length === 0 && empty.constructor === Object)
      history.goBack();
  }, []);
  return (
    <section className="section-jobs-detail">
      <div className="home__sampleContainer">
        <div className="home__sampleJobs">
          <div className="jobs__detailsTitle">
            <Title variant="pr-30-1">Detail</Title>
            <Icon name="BriefCaseColor" />
          </div>
          <div className="jobs__detailsMain">
            <div className="u-space-between u-align-center">
              <div className="u-flex-start">
                <Image name="Aurum" />
                <div className="u-margin-left-10">
                  <div>
                    <Title variant="pr-13-1">{detail?.company_name}</Title>
                  </div>
                  <div>
                    <Title variant="pr-13-1">{detail?.city}</Title>
                  </div>
                </div>
              </div>
              <div className="jobs__detailsCTA">
                <Button variant="1-3" content="Apply" />
                <Button variant="1-3" content="save job" />
              </div>
            </div>
            <Text variant="pl-17-1" className="u-margin-top-10">
              {detail?.description}
            </Text>
            <Title
              variant="pr-17-1"
              className="u-margin-top-25 u-display-block"
            >
              Job Responsibility
            </Title>
            <Text variant="pl-17-1" className="u-margin-top-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </Text>
            <Title
              variant="pr-17-1"
              className="u-margin-top-25 u-display-block"
            >
              Full time, contract based
            </Title>

            <Title
              variant="pr-17-1"
              className="u-margin-top-25 u-display-block"
            >
              Skill required
            </Title>
            {DUMMY_SKILLS.map((skill, index) => (
              <Text variant="pl-17-1" className="u-display-block" key={index}>
                {skill}
              </Text>
            ))}
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

const mapStateToProps = (state) => ({
  detail: state.jobs.detail,
});

export default connect(mapStateToProps)(Detail);
