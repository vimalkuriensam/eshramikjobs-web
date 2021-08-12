import React from "react";
import Title from "../../../../components/atoms/Title";
import TableContainer from "../../../../components/organisms/TableContainer";

const Aplications = () => {
  return (
    <section className="section-recruit">
      <Title variant="pr-24-2">View applications</Title>
      <TableContainer
        className="u-margin-top-30"
        title={" "}
        contentCheck={{ sort: true, action: true, type: false }}
      >
        <div className="a-row u-margin-top-40">
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
      </TableContainer>
    </section>
  );
};

export default Aplications;
