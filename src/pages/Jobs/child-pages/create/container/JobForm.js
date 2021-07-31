import React from "react";

import Button from "../../../../../components/atoms/Button";
import FormInput from "../../../../../components/molecules/FormInput";
import RadioGroup from "../../../../../components/molecules/RadioGroup";

const JobForm = () => {
  return (
    <div className="jobs__form">
      <div className="row">
        <FormInput
          variant="1"
          title="Company name"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Your role in hiring process"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Job Title"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Where will the employee report to work"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <RadioGroup
          contents={[
            { id: "yes", title: "Employee report to specific location", name: "report" },
            { id: "no", title: "Employee don't report to specific loaction", name: "report" },
          ]}
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Enter address"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="City"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="How many hires?"
          className="jobs__formInput"
          type="number"
          placeholder=""
        />
      </div>
      <Button variant="1-3" content="Submit" />
    </div>
  );
};

export default JobForm;
