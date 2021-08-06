import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../../../components/atoms/Button";
import Icon from "../../../../components/atoms/Icon";
import Image from "../../../../components/atoms/Image";
import Text from "../../../../components/atoms/Text";
import Title from "../../../../components/atoms/Title";
import { applyJob } from "../../../../redux/actions/jobs.action";
import history from "../../../../utils/history";
import { DUMMY_SKILLS } from "./data";

const Detail = ({ detail, dispatch }) => {
  useEffect(() => {
    if (Object.keys(detail).length === 0 && detail.constructor === Object)
      history.goBack();
  }, []);

  const handleJobStatus = (id, type) => dispatch(applyJob({ id, type }));
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
                    <Title variant="pr-17-4">{detail?.company_name}</Title>
                  </div>
                </div>
              </div>
              <div className="jobs__detailsCTA">
                {!detail?.ApplyId && (
                  <Button
                    variant="1-3"
                    content="Apply"
                    onButtonClick={handleJobStatus.bind(
                      this,
                      detail.jobId,
                      "apply"
                    )}
                  />
                )}
                {!detail?.savedId && (
                  <Button
                    variant="1-3"
                    content="save job"
                    onButtonClick={handleJobStatus.bind(
                      this,
                      detail.jobId,
                      "save"
                    )}
                  />
                )}
              </div>
            </div>
            <div className="u-space-between u-margin-top-20">
              <div>
                <Title variant="pr-17-4" className="u-display-block">
                  {detail?.title} Requirement
                </Title>
                <Title variant="pr-17-4" className="u-display-block">
                  Positions: {detail?.job_data?.positions}
                </Title>
              </div>
              <div>
                <Title>{detail?.city}</Title>
              </div>
            </div>
            <div className="u-margin-top-10">
              <Text variant="pl-17-2">Experience:&nbsp;</Text>
              <Text variant="pl-17-1">
                {detail?.job_data?.experience?.min} to{" "}
                {detail?.job_data?.experience?.max} years{" "}
              </Text>
            </div>
            <div className="u-margin-top-20">
              <Text variant="pl-17-2">Salary:&nbsp;</Text>
              <Text variant="pl-17-1">Rs {detail?.job_data?.salary?.max}</Text>
            </div>
            <Text variant="pl-17-2" className="u-margin-top-30 u-display-block">
              Job Description
            </Text>
            <Text variant="pl-17-1" className="u-margin-top-10 u-text-justify">
              {detail?.job_data?.description}
            </Text>
            <Text variant="pl-17-2" className="u-margin-top-25 u-display-block">
              Job Responsibility
            </Text>
            <Text variant="pl-17-1" className="u-margin-top-10 u-text-justify">
              {detail?.job_data?.responsibility}
            </Text>
            <Text variant="pl-17-2" className="u-margin-top-25 u-display-block">
              Full time, contract based
            </Text>

            <Text variant="pl-17-2" className="u-margin-top-25 u-display-block">
              Skill required
            </Text>
            {detail?.job_data?.skills.map((skill, index) => (
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
