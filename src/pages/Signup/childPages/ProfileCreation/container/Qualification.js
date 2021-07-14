import React from "react";

import Button from "../../../../../components/atoms/Button";
import Title from "../../../../../components/atoms/Title";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import { QUALIFICATION_SCHOOL, QUALIFICATION_SPECIALIZATION } from "../data";

const Qualification = ({ info, onHandleQualificationInfo }) => {
  return (
    <div>
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
            <FormDropdown title="Board name" />
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
            <FormDropdown title="Institution name" />
          </div>
          <div className="row u-margin-top-55">
            <FormDropdown title="Degree" />
          </div>
          <div className="row">
            <FormDropdown title="College/University" />
          </div>
          <div className="row">
            <Button content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
