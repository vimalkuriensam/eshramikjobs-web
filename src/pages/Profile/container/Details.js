import React, { forwardRef, useRef } from "react";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import DetailsContainer from "./DetailsContainer";
import EmployementDetails from "./EmployementDetails";
import Headline from "./Headline";
import Overseas from "./Overseas";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Skills from "./Skills";

const Details = forwardRef((props, ref) => {
  const { 0: ref1, 1: ref2, 2: ref3, 3: ref4, 4: ref5, 5: ref6 } = ref;
  return (
    <div className="profile__detailsMain">
      <DetailsContainer title="Resume headline" ref={ref1}>
        <Headline />
      </DetailsContainer>

      <DetailsContainer title="Qualification" ref={ref2}>
        <Qualification />
      </DetailsContainer>

      <DetailsContainer title="Skills" ref={ref3}>
        <Skills />
      </DetailsContainer>

      <DetailsContainer title="Employeement Details" ref={ref4}>
        <EmployementDetails />
      </DetailsContainer>

      <DetailsContainer title="Overseas opportunity" ref={ref5}>
        <Overseas />
      </DetailsContainer>

      <DetailsContainer title="Personal Information" ref={ref6}>
        <PersonalInfo />
      </DetailsContainer>
    </div>
  );
});

export default Details;
