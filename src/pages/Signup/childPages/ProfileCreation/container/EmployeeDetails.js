import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormCalendar from "../../../../../components/molecules/FormCalendar";
import Dropdown from "../../../../../components/atoms/Dropdown";
import Divider from "../../../../../components/atoms/Divider";
import Icon from "../../../../../components/atoms/Icon";

const EmployeeDetails = ({ info, onAddExperience, onDeleteExperience }) => {
  return (
    <div>
      <Title variant="pr-24-1">5. Employeement details</Title>
      {info.map((val, index) => (
        <div className="row" key={index}>
          {index > 0 && (
            <div>
              <Divider />
              <div className="row">
                <div className="col-1-of-2">&nbsp;</div>
                <div className="col-1-of-2 authentication__deleteContainer">
                  <Icon
                    name="Delete"
                    className="authentication__delete"
                    onIconClick={onDeleteExperience.bind(this, index)}
                  />
                </div>
              </div>
            </div>
          )}

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
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-1-of-2">&nbsp;</div>
        <div className="col-1-of-2">
          <div className="row">
            <Button
              onButtonClick={onAddExperience}
              content="Add more experience +"
              variant="5"
            />
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
