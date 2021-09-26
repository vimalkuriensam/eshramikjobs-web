import { Page, PDFViewer } from "@react-pdf/renderer";
import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import Button from "../../../../../../../components/atoms/Button";
import Icon from "../../../../../../../components/atoms/Icon";
import Text from "../../../../../../../components/atoms/Text";
import Title from "../../../../../../../components/atoms/Title";
import FormRadioGroup from "../../../../../../../components/molecules/FormRadioGroup";
import Dummy from "./Dummy";

const Details = ({
  basic,
  info,
  education,
  profession,
  skills,
  employment,
  overseas,
}) => {
  const employments = employment
    ?.map((val) => ({
      ...val,
      start_date: moment(val.start_date).format("YYYY-MM-DD"),
      end_date: moment(val.end_date).format("YYYY-MM-DD"),
    }))
    .sort(
      (a, b) => moment(b.start_date).valueOf() - moment(a.start_date).valueOf()
    );

  const Details = () => {
    return (
      <div className="recruit__resumeContainer">
        <div className="u-space-between">
          <Title variant="pr-19-3" className="u-display-block">
            Resume headline
          </Title>
          <div className="recruit__download">
            <Icon name="Download" />
            <Text>Download Resume</Text>
          </div>
        </div>
        <Text variant="pl-14-1" className="u-display-block">
          {employments[0].title}
        </Text>
        <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
          Qualification
        </Title>
        <Text variant="pl-14-1" className="u-display-block">
          {education.specialization}
          <br />
          {education.college}
          <br />
          {education.institution_name}
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
          {skills.skill_list.map((skill, index) => (
            <span key={index} className="form__textarea--textgroup">
              <Title variant="pr-19-3">{skill}</Title>
            </span>
          ))}
        </div>
        <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
          Employement Details
        </Title>
        <div className="recruit__employments">
          {employments.map((employment, index) => (
            <div key={index}>
              <Text
                variant="pl-14-1"
                className="u-display-block u-max-width-60 u-text-justify"
              >
                {employment.title}
                <br />
                {employment.name}
                <br />
                {moment(employment.start_date).format("DD-MM-YYYY")} -{" "}
                {moment(employment.end_date).format("DD-MM-YYYY")}
                <br />
                {employment.location_state}
                <br />
                {JSON.parse(employment.job_description)}
              </Text>
            </div>
          ))}
        </div>
        <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
          Overseas opportunity
        </Title>
        <Text variant="pl-14-1" className="u-display-block">
          {overseas[0].int_overseas_opp ? "Yes" : "No"}
        </Text>
        <div className="recruit__statusContainer">
          <div className="recruit__personalInfo">
            <Title
              variant="pr-19-3"
              className="u-display-block u-margin-top-40"
            >
              Personal information
            </Title>
            <div className="row">
              <div className="col-1-of-4">
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Full Name
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  Jhon Steve Dohe
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Date of Birth
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  25 Feb 1990
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Gender
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  Male
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Area Pin Code
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  416112
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Marital Status
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  Single
                </Text>
              </div>
              <div className="col-1-of-4">
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Hometown
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  Peth Vadgaon
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Permanent Address
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  House no. 21, Magarpatta road
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Pin code
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  112054
                </Text>
                <Text
                  variant="pl-14-3"
                  className="u-display-block u-margin-top-30"
                >
                  Email
                </Text>
                <Text variant="pl-14-1" className="u-display-block">
                  jhondohe52@gmail.com
                </Text>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <FormRadioGroup
                column="3"
                title="Recruit Status"
                contents={[
                  { id: "1", title: "Contacted", name: "status" },
                  { id: "2", title: "Interviewed", name: "status" },
                  { id: "3", title: "Hired", name: "status" },
                ]}
              />
            </div>
            <Button variant="1-3" content="Submit" />
          </div>
        </div>
      </div>
    );
  };
  return <Details />;
};

const mapStateToProps = (state) => ({
  basic: state.user.basic,
  info: state.user.profile.info,
  education: state.user.profile.education,
  profession: state.user.profile.profession,
  skills: state.user.profile.skills,
  employment: state.user.profile.employment,
  overseas: state.user.profile.overseas,
});

export default connect(mapStateToProps)(Details);
