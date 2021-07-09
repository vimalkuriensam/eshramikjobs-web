import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";

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
            <FormDropdown title="Job title" />
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="row">
            <FormDropdown title="District" />
          </div>
          <div className="row">
            <Checkbox className="u-margin-top-50">
              Permanent address as previous
            </Checkbox>
          </div>
          <div className="row">
            <FormInput title="House number" placeholder="" variant="1" />
          </div>
          <div className="row">
            <FormInput title="Street locality" placeholder="" variant="1" />
          </div>
          <div className="row">
            <FormInput title="Pin code" placeholder="" variant="1" />
          </div>
          <div className="row">
            <FormDropdown title="State" />
          </div>
          <div className="row">
            <FormDropdown title="City" />
          </div>
          <div className="row">
            <FormDropdown title="District" />
          </div>
          <div className="row">
            <FormInput title="Email" placeholder="" variant="1" />
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
