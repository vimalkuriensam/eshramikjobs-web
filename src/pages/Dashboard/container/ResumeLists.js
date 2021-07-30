import React from "react";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import ToolTip from "../../../components/molecules/ToolTip";

import TableContainer from "../../../components/organisms/TableContainer";
import { RESUME_LIST_CONTENTS, RESUME_LIST_HEADER } from "../data";

const ResumeLists = () => {
  return (
    <TableContainer title="Resumes recieved">
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
        <div className="a-row dashboard__tableList" key={index}>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Image name={list.image} />
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <ToolTip>
              <Text variant="pl-16-1">{list.name}</Text>
            </ToolTip>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Text variant="pl-16-1">{list.designation}</Text>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Text variant="pl-16-1">{list.skill}</Text>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Text variant="pl-16-1">{list.education}</Text>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Text variant="pl-16-1">{list.gender}</Text>
          </div>
          <div
            className={`col-a-1-of-${Object.keys(list).length} u-text-center`}
          >
            <Text variant="pl-16-1">{list.age}</Text>
          </div>
        </div>
      ))}
    </TableContainer>
  );
};

export default ResumeLists;
