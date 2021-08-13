import React, { forwardRef, useRef } from "react";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import DetailsContainer from "./DetailsContainer";

const Details = forwardRef((props, ref) => {
  const { 0: ref1, 1: ref2, 2: ref3, 3: ref4, 4: ref5, 5: ref6 } = ref;
  return (
    <div className="profile__detailsMain">
      <DetailsContainer title="Resume headline" ref={ref1}>
        <Text variant="pl-14-1">Construction supervisor</Text>
      </DetailsContainer>

      <DetailsContainer title="Qualification" ref={ref2}>
        <Text variant="pl-18-2" className="u-margin-top-30 u-display-block">
          Board
        </Text>
        <Text variant="pl-14-1" className="u-display-block">
          Maharashtra
        </Text>
        <Text variant="pl-14-1" className="u-display-block">
          2009
        </Text>
        <Text variant="pl-14-1" className="u-margin-top-30 u-display-block">
          Pune University
        </Text>
        <Text variant="pl-14-1" className="u-display-block">
          Diploma in civil engineering
        </Text>
        <Text variant="pl-14-1" className="u-display-block">
          MIT college of engineering
        </Text>
      </DetailsContainer>

      <DetailsContainer title="Skills" ref={ref3}>
        <div className="recruit__skills">
          {["Auto cad", "3Ds Max", "Catia", "Revit", "Project Management"].map(
            (skill, index) => (
              <span key={index} className="form__textarea--textgroup">
                <Title variant="pr-19-3">{skill}</Title>
              </span>
            )
          )}
        </div>
      </DetailsContainer>

      <DetailsContainer title="Employeement Details" ref={ref4}>
        <Text variant="pl-16-1" className="u-margin-top-20 u-display-block">
          Construction supervisor
        </Text>
        <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
          Kumar constructions
        </Text>
        <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
      </DetailsContainer>

      <DetailsContainer title="Overseas opportunity" ref={ref5}>
        <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
          No
        </Text>
      </DetailsContainer>

      <DetailsContainer title="Personal Information" ref={ref6}>
        <div className="row u-margin-top-30">
          <div className="col-1-of-2">
            <Text variant="pl-14-1 u-display-block">Full name</Text>
            <Text variant="pl-14-3 u-display-block">Jhone Steve Dohe</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              Date of Birth
            </Text>
            <Text variant="pl-14-3 u-display-block">25 Feb 1990</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              Gender
            </Text>
            <Text variant="pl-14-3 u-display-block">Male</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              Area Pin Code
            </Text>
            <Text variant="pl-14-3 u-display-block">416112</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              Marital Status
            </Text>
            <Text variant="pl-14-3 u-display-block">Single</Text>
          </div>
          <div className="col-1-of-2">
            <Text variant="pl-14-1 u-display-block">Permanent Address</Text>
            <Text variant="pl-14-3 u-display-block">
              House no. 21, Magarpatta road
            </Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              Pin code
            </Text>
            <Text variant="pl-14-3 u-display-block">112054</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">State</Text>
            <Text variant="pl-14-3 u-display-block">Maharashtra</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">City</Text>
            <Text variant="pl-14-3 u-display-block">Pune</Text>
            <Text variant="pl-14-1 u-display-block u-margin-top-30">
              District
            </Text>
            <Text variant="pl-14-3 u-display-block">Pune</Text>
          </div>
        </div>
      </DetailsContainer>
    </div>
  );
});

export default Details;
