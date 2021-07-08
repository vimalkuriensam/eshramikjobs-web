import React from "react";

import Title from "../../../../components/atoms/Title";
import Stepper from "./container/Stepper";

const ProfileCreation = ({ match }) => {
  return (
    <section>
      <Title variant="pm-26-1" className="u-text-center u-width-100">
        Create your Eshramik resume
      </Title>
      <Stepper total={5} />
    </section>
  );
};

export default ProfileCreation;
