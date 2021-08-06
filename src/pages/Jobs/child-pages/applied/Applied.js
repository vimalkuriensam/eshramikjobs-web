import React from "react";
import { connect } from "react-redux";
import Icon from "../../../../components/atoms/Icon";
import Text from "../../../../components/atoms/Text";
import Title from "../../../../components/atoms/Title";
import CompanyListings from "../../../../components/organisms/CompanyListings";
import JobListings from "../../../../components/organisms/JobListings";
import { funcMap } from "../../../../utils/data";
import history from "../../../../utils/history";
import Advertisement from "./container/Advertisement";
import Feedback from "./container/Feedback";

const Applied = ({ appliedJobs, companies, dispatch }) => {
  const onHandleJobDetail = async (id) => {
    const response = await funcMap["appliedJobs"](dispatch, id);
    if (response) history.push("/jobs/detail");
  };

  const onHandleButtonDelete = async (deleteProps, e) => {
    e.stopPropagation();
    const { applyId } = deleteProps;
    const response = await funcMap["jobDelete"](dispatch, applyId, "apply");
    if (response) await funcMap["appliedJobs"](dispatch);
  };
  return (
    <div>
      <section className="section-home-samples page">
        <div className="home__sampleContainer">
          <div className="home__sampleJobs">
            <Title className="u-margin-bottom-50" variant="pr-30-1">
              Applied jobs
            </Title>
            <div className="jobs__jobsLogo">
              <Icon name="BriefCaseColor" />
            </div>
            <JobListings
              jobs={appliedJobs}
              onHandleJobDetail={onHandleJobDetail}
              onHandleButtonDelete={onHandleButtonDelete}
            />
            {!appliedJobs.length && (
              <div className="u-text-center">
                <Text variant="pl-17-1">You have not applied any jobs yet!</Text>
              </div>
            )}
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
  appliedJobs: state.jobs.applied,
  companies: state.jobs.companies,
});

export default connect(mapStateToProps)(Applied);
