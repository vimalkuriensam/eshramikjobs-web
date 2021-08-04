import React, { useEffect } from "react";
import { connect } from "react-redux";
import Title from "../../../components/atoms/Title";

import CompanyListings from "../../../components/organisms/CompanyListings";
import WorkListings from "../../../components/organisms/JobListings";
import { getJobs, getRecentJobs } from "../../../redux/actions/jobs.action";
import { loginState } from "../../../redux/actions/utils.action";
import { funcMap } from "../../../utils/data";
import history from "../../../utils/history";
import Profile from "./Profile";

const Samples = ({ jobs, companies, isLogged, isAuthenticated, dispatch }) => {
  useEffect(() => {
    dispatch(
      getRecentJobs({
        pageNumber: 0,
        itemsPerPage: 4,
        jobTitle: null,
        location: null,
      })
    );
  }, []);

  const onHandleJobDetail = async (id) => {
    if (!isAuthenticated) dispatch(loginState({ state: true }));
    else {
      const response = await funcMap["getJob"](dispatch, id);
      if (response) history.push("/jobs/detail");
    }
  };
  return (
    <section className="section-home-samples">
      <div className="home__sampleContainer">
        <div className="home__sampleJobs">
          <Title className="u-margin-bottom-50" variant="pr-30-1">
            Recent jobs
          </Title>
          <WorkListings jobs={jobs} onHandleJobDetail={onHandleJobDetail} />
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
  isAuthenticated: !!state.auth.accessToken,
});

export default connect(mapStateToProps)(Samples);
