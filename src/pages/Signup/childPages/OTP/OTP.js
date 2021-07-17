import React from "react";
import history from "../../../../utils/history";
import Details from "./container/Details";

import Hero from "./container/Hero";

const OTP = ({ location }) => {
  const mobile = location?.state?.mobile;
  const email = location?.state?.email;
  if (mobile || email) {
  } else {
    history.push("/register");
  }
  return (
    <div className="page">
      <div className="row">
        <div className="col-1-of-2">
          <Hero />
        </div>
        <div className="col-1-of-2">
          <Details mobile={mobile} email={email} />
        </div>
      </div>
    </div>
  );
};

export default OTP;
