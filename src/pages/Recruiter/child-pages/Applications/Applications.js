import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import Image from "../../../../components/atoms/Image";
import Title from "../../../../components/atoms/Title";
import ToolTip from "../../../../components/molecules/ToolTip";
import TableContainer from "../../../../components/organisms/TableContainer";
import history from "../../../../utils/history";
import { APPLICATION_DEFAULT_VALUES } from "./data";

const Aplications = ({ dispatch, candidates = [] }) => {
  const onHandleApplication = () => history.push("/recruite/applications/view");
  console.log(candidates);
  return (
    <section className="section-recruit">
      <Title variant="pr-24-2">View applications</Title>
      <TableContainer
        className="u-margin-top-30"
        title={" "}
        contentCheck={{ sort: true, action: true, type: false }}
      >
        <div className="a-row u-margin-top-40 table__rowHeader">
          <div className="col-a-1-of-7 u-text-center">&nbsp;</div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Name</Title>{" "}
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Designation</Title>
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Skills</Title>
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Education</Title>
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Gender</Title>
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Age</Title>
          </div>
        </div>
        {[...candidates, ...APPLICATION_DEFAULT_VALUES].map(
          (content, index) => (
            <div
              className={`a-row table__rowContent table__rowContent--${
                index % 2 == 0 ? "dark" : "light"
              }`}
              key={index}
              onClick={onHandleApplication}
            >
              <div className="col-a-1-of-7 u-text-center">
                <Image
                  className="recruit__candidatesImage"
                  name={content.photo || "no-image-placeholder"}
                />
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip title={content.fullName}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.fullName}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip title={content.jobTitle}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.jobTitle}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip title={content.skills}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.skills}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip name={content.education}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.education}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip title={content.gender}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.gender}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip title={content.dob}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {moment().diff(content.dob, "years", false) || content.dob}
                  </Title>
                </ToolTip>
              </div>
            </div>
          )
        )}
      </TableContainer>
    </section>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.recruiter.candidates,
});

export default connect(mapStateToProps)(Aplications);
