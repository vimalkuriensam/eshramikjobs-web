import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSkills } from "../../redux/actions/jobs.action";

const Jobs = ({ dispatch }) => {
  return <div className="page">Jobs</div>;
};

export default connect()(Jobs);
