import React from "react";

import Title from "../../../../components/atoms/Title";
import Image from "../../../../components/atoms/Image";
import Stepper from "./container/Stepper";
import PersonalInformation from "./container/PersonalInformation";
import Qualification from "./container/Qualification";
import { PROFILE_COMPONENTS } from "./data";

const ProfileCreation = ({ match }) => {
  const step = match.params.step;
  const getComponent = () => {
    switch (step) {
      case "1":
        return <PersonalInformation />;
      case "2":
        return <Qualification />;
      case "3":
        return <Profession />;
      case "4":
        return <Skills />;
      case "5":
        return <EmployeeDetails />;
      case "6":
        return <Overseas />;
      case "7":
        return <Upload />;
      case "8":
        return <Resume />;
    }
  };
  return (
    <section className="section-profile-creaton">
      <Image name="hexagon" className="authentication__hexagon1" />
      <Image name="hexagon" className="authentication__hexagon2" />
      <Title variant="pm-26-1" className="u-text-center u-width-100">
        Create your Eshramik resume
      </Title>
      <Stepper total={5} />
      {getComponent()}
    </section>
  );
};

export default ProfileCreation;
