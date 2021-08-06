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

const Saved = ({ savedJobs, companies, dispatch }) => {
  const onHandleJobDetail = async (id) => {
    const response = await funcMap["getJob"](dispatch, id);
    if (response) history.push("/jobs/detail");
  };

  const onHandleButtonDelete = async (deleteProps, e) => {
    e.stopPropagation();
    const { saveId } = deleteProps;
    const response = await funcMap["jobDelete"](dispatch, saveId, "save");
    if (response) await funcMap["savedJobs"](dispatch);
  };
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
            <JobListings
              jobs={savedJobs}
              onHandleJobDetail={onHandleJobDetail}
              onHandleButtonDelete={onHandleButtonDelete}
            />
            {!savedJobs.length && (
              <div className="u-text-center">
                <Text variant="pl-17-1">You have not saved any jobs yet!</Text>
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
  savedJobs: state.jobs.saved,
  companies: state.jobs.companies,
});

export default connect(mapStateToProps)(Saved);
