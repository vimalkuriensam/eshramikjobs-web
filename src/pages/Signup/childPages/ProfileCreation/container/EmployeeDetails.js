import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";
import FormCalendar from "../../../../../components/molecules/FormCalendar";
import Dropdown from "../../../../../components/atoms/Dropdown";
import TextArea from "../../../../../components/atoms/TextArea";

const EmployeeDetails = () => {
  return (
    <div>
      <Title variant="pr-24-1">5. Employeement details</Title>
      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormInput
              title="Name of Organization/Company"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormCalendar title="Start Date" />
          </div>
          <div className="row">
            <FormCalendar title="End Date" />
          </div>
          <div className="row">
            <FormDropdown title="Job title" />
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="row">
            <FormDropdown title="Job location" />
          </div>
          <div className="row">
            <Dropdown />
          </div>
          <div className="row">
            <FormInput title="Last drawn salary" variant="1" placeholder="" />
          </div>
          <div className="row">
            <FormInput type="textarea" title="Job description" />
          </div>
          <div className="row">
            <Button content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
