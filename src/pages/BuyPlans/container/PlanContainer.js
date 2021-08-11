import React from "react";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const PlanContainer = ({
  variant = "primary",
  headerContents,
  contents = [],
}) => {
  return (
    <div className="u-margin-top-50 recruit__planRegion">
      <div className={`recruit__planHeader recruit__planHeader--${variant}`}>
        <div className="row">
          <div className="col-1-of-3">
            <Title variant="pr-21-1">{headerContents.column1}</Title>
          </div>
          <div className="col-1-of-3">
            <Text variant="pl-14-2">{headerContents.column2}</Text>
          </div>
          <div className="col-1-of-3">
            <Text variant="pr-18-2">{headerContents.column3}</Text>
          </div>
        </div>
      </div>
      {/*contents*/}
      <div className="a-row u-max-width-100">
        <div className="col-a-1-of-4 recruit__planContentLeft">
          <Title variant="pm-17-1">Database + job posting</Title>
        </div>
        <div className="col-a-3-of-4">
          {contents.map((content, index) => (
            <div className="a-row recruit__planContents" key={index}>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.time}</Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.resumes}</Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.price}</Text>
              </div>
              <div className="col-a-1-of-4">
                <span className="u-cursor-pointer">
                  <Title variant="pr-15-3">Buy Now</Title>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
