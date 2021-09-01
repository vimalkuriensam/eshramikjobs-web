import React from "react";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import ToolTip from "../../../components/molecules/ToolTip";

import TableContainer from "../../../components/organisms/TableContainer";

const Enrollment = ({ companies = [] }) => {
  return (
    <TableContainer
      className="dashboard__tableContainer dashboard__companiesContainer"
      title="Companies Enrolled"
      contentCheck={{ sort: false, type: false, action: true }}
    >
      <div className="u-margin-top-2">
        {companies.map((company, index) => (
          <div className="a-row dashboard__companies" key={index}>
            <div className="col-a-1-of-2 u-text-center">
              <Image
                name={`${company.logo ? company.logo : "no-image-placeholder"}`}
                type={`${company.logo ? "binary" : "png"}`}
                className="dashboard__logo"
              />
            </div>
            <div className="col-a-1-of-2 u-margin-top-10">
              <ToolTip>
                <Text variant="pl-16-1" className="dashboard__tableText">
                  {company.name}
                </Text>
              </ToolTip>
            </div>
          </div>
        ))}
      </div>
    </TableContainer>
  );
};

export default Enrollment;
