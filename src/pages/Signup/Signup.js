import React from "react";

import Details from "./container/Details";
import Hero from "./container/Hero";

const Signup = () => {
  return (
    <div className="page">
      <div className="row">
        <div className="col-1-of-2">
          <Hero />
        </div>
        <div className="col-1-of-2">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Signup;
