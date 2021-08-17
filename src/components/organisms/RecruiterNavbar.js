import React, { useEffect } from "react";
import { connect } from "react-redux";

import BlacklistComponent from "../../hoc/BlacklistComponent";
import {
  funcMap,
  RECRUITER_NAVBAR_NAVS,
  USER_ROUTE_TYPES,
} from "../../utils/data";
import history from "../../utils/history";

const RecruiterNavbar = ({ dispatch }) => {
  const onHandleRecruiterNavs = (type, link) => {
    switch (type) {
      case "link":
        history.push(link);
        break;
      case "process":
        return funcMap[link](dispatch);
    }
  };
  // useEffect(() => {
  //   console.log(history.location.pathname.split("/"));
  // }, [history]);
  return (
    <div className="recruiterNavbar">
      {/*<NavLink
      to={nav.to}
      key={index}
      className="recruiterNavbar__nav"
      activeClassName="recruiterNavbar__nav--active"
    >
      {nav.text}
    </NavLink>*/}
      {RECRUITER_NAVBAR_NAVS.map((nav, index) => (
        <span
          key={index}
          onClick={onHandleRecruiterNavs.bind(this, nav.type, nav.link)}
          className="recruiterNavbar__nav"
        >
          {nav.text}
        </span>
      ))}
    </div>
  );
};

export default BlacklistComponent(connect()(RecruiterNavbar))([
  ...USER_ROUTE_TYPES.admin,
  ...USER_ROUTE_TYPES.user,
  ...USER_ROUTE_TYPES.default,
]);
