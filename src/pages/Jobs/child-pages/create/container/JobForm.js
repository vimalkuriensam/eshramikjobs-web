import React, { useState } from "react";

import Button from "../../../../../components/atoms/Button";
import FormInput from "../../../../../components/molecules/FormInput";
import RadioGroup from "../../../../../components/molecules/RadioGroup";

const JobForm = () => {
  const [jobProps, setJobProps] = useState({
    name: "",
    role: "",
    title: "",
    location: "",
    locationRadio: "",
    address: "",
    city: "",
    openings: 1,
    description: "",
  });

  const onHandleJobProps = (type, {target}) => {
    const { value } = target;
    setJobProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  return (
    <div className="jobs__form">
      <div className="row">
        <FormInput
          variant="1"
          title="Company name"
          value={jobProps.name}
          onHandleText={onHandleJobProps.bind(this, 'name')}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.role}
          onHandleText={onHandleJobProps.bind(this, 'role')}
          title="Your role in hiring process"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.title}
          onHandleText={onHandleJobProps.bind(this, 'title')}
          title="Job Title"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.location}
          onHandleText={onHandleJobProps.bind(this, 'location')}
          title="Where will the employee report to work"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <RadioGroup
          contents={[
            {
              id: "yes",
              title: "Employee report to specific location",
              name: "report",
            },
            {
              id: "no",
              title: "Employee don't report to specific loaction",
              name: "report",
            },
          ]}
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.address}
          onHandleText={onHandleJobProps.bind(this, 'address')}
          title="Enter address"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="City"
          value={jobProps.city}
          onHandleText={onHandleJobProps.bind(this, 'city')}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="How many hires?"
          value={jobProps.openings}
          onHandleText={onHandleJobProps.bind(this, 'openings')}
          className="jobs__formInput"
          type="number"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Job description"
          value={jobProps.description}
          onHandleText={onHandleJobProps.bind(this, 'description')}
          className="jobs__formInput"
          type="textarea"
          placeholder=""
        />
      </div>
      <Button variant="1-3" content="Submit" />
    </div>
  );
};

export default JobForm;
