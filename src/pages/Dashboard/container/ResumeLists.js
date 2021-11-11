import React from "react";
import moment from "moment";

import Icon from "../../../components/atoms/Icon";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import ToolTip from "../../../components/molecules/ToolTip";
import Pagination from "../../../components/organisms/Pagination";

import TableContainer from "../../../components/organisms/TableContainer";
import { RESUME_LIST_CONTENTS, RESUME_LIST_HEADER } from "../data";
import history from "../../../utils/history";
import { connect } from "react-redux";
import { getCandidateInfo } from "../../../redux/actions/recruit.action";

const ResumeLists = ({ resumes = [], pagination = false, dispatch }) => {
  const onHandleResume = async (id) => {
    const resp = await dispatch(getCandidateInfo({ profileId: id }));
    if (resp) history.push(`/resumes/${id}`);
  };
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
          onClick={onHandleResume.bind(this, list.profile_id)}
          key={index}
        >
          <div className={`col-a-1-of-7 u-text-center`}>
            {list.photo ? (
              <Image
                name={list.photo}
                type="binary"
                className="recruit__candidatesImage"
              />
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
      {pagination && <Pagination />}
    </TableContainer>
  );
};

export default connect()(ResumeLists);
