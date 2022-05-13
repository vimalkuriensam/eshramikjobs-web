import React from "react";

import Details from "./container/Details";
import Hero from "./container/Hero";

const OTP = (props) => {
  const mobile = props?.location?.state?.mobile;
  const email = props?.location?.state?.email;
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
