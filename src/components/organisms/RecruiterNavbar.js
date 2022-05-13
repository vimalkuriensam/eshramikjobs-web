import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import BlacklistComponent from "../../hoc/BlacklistComponent";
import {
  funcMap,
  RECRUITER_NAVBAR_NAVS,
  USER_ROUTE_TYPES,
} from "../../utils/data";
import history from "../../utils/history";

const RecruiterNavbar = ({ location, dispatch }) => {
  const { pathname } = location;
  const onHandleRecruiterNavs = (type, link) => {
    switch (type) {
      case "link":
        history.push(link);
        break;
      case "process":
        return funcMap[link](dispatch);
    }
  };
  return (
    <div className="recruiterNavbar">
      {RECRUITER_NAVBAR_NAVS.map((nav, index) => (
        <span
          key={index}
          onClick={onHandleRecruiterNavs.bind(this, nav.type, nav.link)}
          className={`recruiterNavbar__nav ${
            pathname == nav.to ? "recruiterNavbar__nav--active" : null
          }`}
        >
          {nav.text}
        </span>
      ))}
    </div>
  );
};

export default withRouter(
  BlacklistComponent(connect()(RecruiterNavbar))([
    ...USER_ROUTE_TYPES.admin,
    ...USER_ROUTE_TYPES.user,
    ...USER_ROUTE_TYPES.default,
  ])
);
