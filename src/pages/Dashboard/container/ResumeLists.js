import React from "react";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import ToolTip from "../../../components/molecules/ToolTip";

import TableContainer from "../../../components/organisms/TableContainer";
import { RESUME_LIST_CONTENTS, RESUME_LIST_HEADER } from "../data";

const ResumeLists = () => {
  return (
    <TableContainer
      title="Resumes recieved"
      contentCheck={{ sort: true, type: false, action: true }}
    >
      <div className="a-row u-margin-top-40">
        {RESUME_LIST_HEADER.map((list, index) => (
          <div
            className={`col-a-1-of-${RESUME_LIST_HEADER.length} u-text-center`}
            key={index}
          >
            <Title variant="pr-16-1">{list || ""}</Title>
          </div>
        ))}
      </div>
      {RESUME_LIST_CONTENTS.map((list, index) => (
        <div
          className={`a-row table__rowContent table__rowContent--${
            index % 2 == 0 ? "dark" : "light"
          }`}
          key={index}
        >
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Image name={list.image} />
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.name}
              </Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.designation}
              </Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.skill}
              </Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.education}
              </Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.gender}
              </Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1" className="dashboard__tableText u-margin-top-10">
                {list.age}
              </Text>
            </ToolTip>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

export default ResumeLists;
