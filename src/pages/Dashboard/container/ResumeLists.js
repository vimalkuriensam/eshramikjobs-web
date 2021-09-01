import moment from "moment";
import React from "react";
import Icon from "../../../components/atoms/Icon";

import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import ToolTip from "../../../components/molecules/ToolTip";

import TableContainer from "../../../components/organisms/TableContainer";
import { RESUME_LIST_CONTENTS, RESUME_LIST_HEADER } from "../data";

const ResumeLists = ({ resumes = [] }) => {
  console.log(resumes);
  return (
    <TableContainer
      title="Resumes recieved"
      contentCheck={{ sort: true, type: false, action: true }}
    >
      <div className="a-row u-margin-top-40 table__rowContent">
        {RESUME_LIST_HEADER.map((list, index) => (
          <div
            className={`col-a-1-of-${RESUME_LIST_HEADER.length} u-text-center`}
            key={index}
          >
            <Title variant="pr-16-1">{list || ""}</Title>
          </div>
        ))}
      </div>
      {resumes.map((list, index) => (
        <div
          className={`a-row table__rowContent table__rowContent--${
            index % 2 == 0 ? "dark" : "light"
          }`}
          key={index}
        >
          <div className={`col-a-1-of-7 u-text-center`}>
            {list.photo ? (
              <Image name={list.photo} type="binary" />
            ) : (
              <div className="dashboard__userIconContainer">
                <Icon name="User" className="dashboard__userIcon" />
              </div>
            )}
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {list.fullName}
              </Text>
            </ToolTip>
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {list.designation}
              </Text>
            </ToolTip>
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {list.company_name}
              </Text>
            </ToolTip>
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {list.jobTitle}
              </Text>
            </ToolTip>
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {list.gender}
              </Text>
            </ToolTip>
          </div>
          <div className={`col-a-1-of-7 u-text-center`}>
            <ToolTip>
              <Text
                variant="pl-16-1"
                className="dashboard__tableText u-margin-top-10"
              >
                {moment().diff(moment(list.dob), "years")}
              </Text>
            </ToolTip>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

export default ResumeLists;
