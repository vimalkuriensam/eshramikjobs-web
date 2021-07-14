import React from "react";
import { connect } from "react-redux";

import Button from "../../../../../components/atoms/Button";
import Title from "../../../../../components/atoms/Title";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import { QUALIFICATION_SCHOOL, QUALIFICATION_SPECIALIZATION } from "../data";

const Qualification = ({
  info,
  onHandleQualificationInfo,
  onHandleSave,
  boards,
  colleges,
  degrees,
  institutions,
}) => {
  const collegesList = colleges.map((college) => college.name);
  const institutionList = institutions.map((institution) => institution.name);
  const degreeList = degrees.map((degree) => degree.name);
  return (
    <div style={{ paddingBottom: "13rem" }}>
      <Title variant="pr-24-1">2. Qualification</Title>

      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormRadioGroup
              value={info.school}
              title={QUALIFICATION_SCHOOL.title}
              contents={QUALIFICATION_SCHOOL.contents}
              onHandleRadioClick={onHandleQualificationInfo.bind(
                this,
                "school"
              )}
            />
          </div>

          <div className="row">
            <FormDropdown
              title="Board name"
              contents={boards}
              value={info.board}
              onHandleDropdownValue={onHandleQualificationInfo.bind(
                this,
                "board"
              )}
            />
          </div>

          <div className="row">
            <FormRadioGroup
              value={info.specialization}
              title={QUALIFICATION_SPECIALIZATION.title}
              contents={QUALIFICATION_SPECIALIZATION.contents}
              onHandleRadioClick={onHandleQualificationInfo.bind(
                this,
                "specialization"
              )}
            />
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <FormDropdown
              title="Institution name"
              contents={institutionList}
              value={info.institution}
              onHandleDropdownValue={onHandleQualificationInfo.bind(
                this,
                "institution"
              )}
            />
          </div>
          <div className="row u-margin-top-55">
            <FormDropdown
              title="Degree"
              value={info.degree}
              onHandleDropdownValue={onHandleQualificationInfo.bind(
                this,
                "degree"
              )}
              contents={degreeList}
            />
          </div>
          <div className="row">
            <FormDropdown
              title="College/University"
              contents={collegesList}
              value={info.college}
              onHandleDropdownValue={onHandleQualificationInfo.bind(
                this,
                "college"
              )}
            />
          </div>
          <div className="row">
            <Button onButtonClick={onHandleSave} content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  colleges: state.profile.colleges,
  degrees: state.profile.degrees,
  institutions: state.profile.institutionName,
  boards: state.profile.boardName,
});

export default connect(mapStateToProps)(Qualification);
