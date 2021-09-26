import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import Image from "../../../../components/atoms/Image";
import Title from "../../../../components/atoms/Title";
import ToolTip from "../../../../components/molecules/ToolTip";
import Pagination from "../../../../components/organisms/Pagination";
import TableContainer from "../../../../components/organisms/TableContainer";
import { funcMap } from "../../../../utils/data";
import history from "../../../../utils/history";

const Applications = ({
  dispatch,
  candidates = [],
  total = 0,
  current = 0,
}) => {
  const [loader, setLoader] = useState(false);
  const onHandleApplication = () => history.push("/recruite/applications/view");
  const onPageChange = async ({ selected }) => {
    setLoader(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const response = await funcMap["candidates"](dispatch, selected, false);
    if (response) setLoader(false);
  };
  return (
    <section className="section-recruit">
      <Title variant="pr-24-2">View applications</Title>
      <TableContainer
        className="u-margin-top-30"
        title={" "}
        contentCheck={{ sort: true, action: false, type: false }}
      >
        <div className="a-row u-margin-top-40 table__rowHeader">
          <div className="col-a-1-of-7 u-text-center">&nbsp;</div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Name</Title>{" "}
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Job Title</Title>
          </div>
          <div className="col-a-1-of-7 u-text-center">
            <Title variant="pr-20-1">Designation</Title>
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
        {loader ? (
          <div className="dashboard__loaderMessage">Loading...</div>
        ) : (
          candidates.map((content, index) => (
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
                  type={content.photo ? "binary" : "png"}
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
                <ToolTip title={content.designation}>
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.designation}
                  </Title>
                </ToolTip>
              </div>
              <div className="col-a-1-of-7 u-text-center">
                <ToolTip
                  name={
                    content.degree
                      ? content.degree
                      : content.school
                      ? content.school
                      : "Not available"
                  }
                >
                  <Title
                    variant="pl-16-1"
                    className="u-text-ellipsis u-margin-top-10"
                  >
                    {content.degree
                      ? content.degree
                      : content.school
                      ? content.school
                      : "Not available"}
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
          ))
        )}
        <Pagination
          total={total}
          currentPage={current}
          pagePerView={4}
          onHandlePageChange={onPageChange}
        />
      </TableContainer>
    </section>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.recruiter.candidates,
  total: state.recruiter.pages.applicationTotal,
  current: state.recruiter.pages.applicationPage,
});

export default connect(mapStateToProps)(Applications);
