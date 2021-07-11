import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";
import Calendar from "../../../../../components/atoms/Calendar";
import FormCalendar from "../../../../../components/molecules/FormCalendar";

const PersonalInformation = () => {
  return (
    <div>
      <Title variant="pr-24-1">1. Personal Information</Title>
      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormInput title="Full name" placeholder="" variant="1" />
          </div>
          <div className="row">
            <FormCalendar
              title="Date of birth"
              onHandleDate={({ target }) => console.log(target.value)}
            />
          </div>
          <div className="row">
            <FormRadioGroup
              title="Gender"
              contents={[
                { id: "male", title: "Male", name: "gender" },
                { id: "female", title: "Female", name: "gender" },
                { id: "others", title: "Others", name: "gender" },
              ]}
            />
          </div>
          <div className="row">
            <FormRadioGroup
              title="Marital Status"
              contents={[
                { id: "married", title: "Married", name: "status" },
                { id: "unmarried", title: "Unmarried", name: "status" },
              ]}
            />
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

export default PersonalInformation;
