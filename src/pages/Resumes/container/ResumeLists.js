import moment from "moment";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Icon from "../../../components/atoms/Icon";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import ToolTip from "../../../components/molecules/ToolTip";
import Pagination from "../../../components/organisms/Pagination";

import TableContainer from "../../../components/organisms/TableContainer";
import {
  getApplicationDetails,
  setResumePage,
} from "../../../redux/actions/admin.action";
import { RESUME_LIST_CONTENTS, RESUME_LIST_HEADER } from "../data";

const ResumeLists = ({ resumes = [], currentPage, totalResumes, dispatch }) => {
  const onHandlePageChange = ({ selected }) => {
    dispatch(setResumePage({ page: selected }));
  };

  const onPageHandle = useCallback(() => {
    dispatch(getApplicationDetails({ count: 8 }));
  }, [currentPage]);

  useEffect(() => {
    onPageHandle();
  }, [currentPage]);
  return (
    <TableContainer title=" ">
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
      {resumes.map((list, index) => (
        <div className="a-row dashboard__tableList" key={index}>
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
      <Pagination
        pagePerView={8}
        currentPage={currentPage}
        total={totalResumes}
        onHandlePageChange={onHandlePageChange}
      />
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  resumes: state.admin.resumes,
  currentPage: state.admin.pages.resumePage,
  totalResumes: state.admin.pages.resumeTotal,
});

export default connect(mapStateToProps)(ResumeLists);
