import React from "react";
import history from "../../../../utils/history";
import Details from "./container/Details";

import Hero from "./container/Hero";

const OTP = ({ location }) => {
  const mobile = location?.state?.mobile;
  if (!mobile) history.push("/register");
  return (
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Hero />
        </div>
        <div className="col-1-of-2">
          <Details mobile={mobile} />
        </div>
      </div>
    </div>
  );
};

export default OTP;
