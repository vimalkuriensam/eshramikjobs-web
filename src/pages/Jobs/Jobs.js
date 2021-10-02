import React from "react";
import { connect } from "react-redux";

import history from "../../utils/history";

import Text from "../../components/atoms/Text";
import Title from "../../components/atoms/Title";
import JobListings from "../../components/organisms/JobListings";
import { funcMap } from "../../utils/data";

const Jobs = ({ dispatch, jobs = [], match }) => {
  const onHandleJobDetail = async (id) => {
    const response = await funcMap["getJob"](dispatch, id);
    if (response) history.push("/jobs/detail");
  };

  const onHandleApplyJob = async (id, e) => {
    e.stopPropagation();
    await funcMap["applyAllJobLists"](dispatch, id);
  };
  return (
    <div className="section-home-samples">
      <Title variant="pr-19-3" className="u-display-block">
        Jobs
      </Title>
      {jobs.length && (
        <Text variant="pl-14-1" className="u-display-block">
          Found {match} jobs that matches your preference
        </Text>
      )}
      <div className="u-margin-top-2">
        {jobs.length && (
          <JobListings
            jobs={jobs}
            onHandleJobDetail={onHandleJobDetail}
            onHandleButtonApply={onHandleApplyJob}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.allJobs,
  match: state.jobs.page.allJobsMatch,
});

export default connect(mapStateToProps)(Jobs);
