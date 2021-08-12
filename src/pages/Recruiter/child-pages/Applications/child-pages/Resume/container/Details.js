import React from "react";
import Text from "../../../../../../../components/atoms/Text";
import Title from "../../../../../../../components/atoms/Title";

const Details = () => {
  return (
    <div className="recruit__resumeContainer">
      <Title variant="pr-19-3" className="u-display-block">
        Resume headline
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        Construction supervisor
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Qualification
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        Diploma in civil engineering
        <br />
        MIT college of engineering
        <br />
        Pune University
        <br />
        2013 full time
        <br />
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Board
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        Maharashtra
        <br />
        2009
        <br />
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Skills
      </Title>
      <div className="recruit__skills">
        {["Auto cad", "3Ds Max", "Catia", "Revit", "Project Management"].map(
          (skill, index) => (
            <span key={index} className="form__textarea--textgroup">
              <Title variant="pr-19-3">{skill}</Title>
            </span>
          )
        )}
      </div>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Employement Details
      </Title>
      <Text
        variant="pl-14-1"
        className="u-display-block u-max-width-60 u-text-justify"
      >
        Construction supervisor
        <br />
        Kumar constructions
        <br />
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Overseas opportunity
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        No
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Personal information
      </Title>
      <div className="row">
        <div className="col-1-of-4">
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Full Name
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Jhon Steve Dohe
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Date of Birth
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            25 Feb 1990
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Gender
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Male
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Area Pin Code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            416112
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Marital Status
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Single
          </Text>
        </div>
        <div className="col-1-of-4">
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Hometown
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Peth Vadgaon
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Permanent Address
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            House no. 21, Magarpatta road
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Pin code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            112054
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Email
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            jhondohe52@gmail.com
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Details;
