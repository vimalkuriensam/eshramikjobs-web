import React, { useState } from "react";

import Button from "../../../components/atoms/Button";
import Title from "../../../components/atoms/Title";
import Input from "../../../components/atoms/Input";
import { connect } from "react-redux";
import { funcMap } from "../../../utils/data";

const Hero = ({ dispatch }) => {
  const [input, setInput] = useState({
    title: "",
    location: "",
  });

  const onHandleInput = (type, { target }) => {
    const { value } = target;
    setInput((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const onHandleJob = (e) => {
    e.preventDefault();
    funcMap["getAllJobs"](dispatch, 0, false, input);
  };

  return (
    <div className="home__hero">
      <div className="home__heroContainer">
        <div>
          <Title variant="pr-35-1">Find Job</Title>
        </div>
        <form onSubmit={onHandleJob}>
          <div className="row u-margin-top-2">
            <div className="col-3-of-7 home__heroInputContainer">
              <Input
                variant="1"
                value={input.title}
                className="home__heroInput"
                placeholder="Job title or company"
                onHandleText={onHandleInput.bind(this, "title")}
              />
            </div>
            <div className="col-3-of-7 home__heroInputContainer">
              <Input
                variant="1"
                value={input.location}
                className="home__heroInput"
                placeholder="Location"
                onHandleText={onHandleInput.bind(this, "location")}
              />
            </div>
            <div className="col-1-of-7 home__heroInputContainer">
              <Button type="submit" variant="2" icon="Search" content="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect()(Hero);
