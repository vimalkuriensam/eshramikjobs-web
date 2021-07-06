import React from "react";

import Button from "../../../components/atoms/Button";
import Title from "../../../components/atoms/Title";
import Input from "../../../components/atoms/Input";

const Hero = () => {
  return (
    <div className="home__hero">
      <div className="home__heroContainer">
        <div>
          <Title variant="pr-35-1">Find Job</Title>
        </div>
        <div className="row">
          <div className="col-3-of-7">
            <Input
              variant="1"
              className="home__heroInput"
              placeholder="Job title or company"
            />
          </div>
          <div className="col-3-of-7">
            <Input
              variant="1"
              className="home__heroInput"
              placeholder="Location"
            />
          </div>
          <div className="col-1-of-7">
            <Button variant="2" icon="Search" content="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
