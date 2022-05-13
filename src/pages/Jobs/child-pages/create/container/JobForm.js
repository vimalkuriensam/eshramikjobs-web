import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Title from "../../../../../components/atoms/Title";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import FormInput from "../../../../../components/molecules/FormInput";
import { createJobs } from "../../../../../redux/actions/jobs.action";
import history from "../../../../../utils/history";

const JobForm = ({ dispatch, companies = [] }) => {
  const JOB_PROPS_DEFAULT_VALUE = {
    name: "",
    title: "",
    city: "",
    data: {
      experience: {
        min: 0,
        max: 1,
      },
      salary: {
        min: 0,
        max: "",
      },
      skills: [],
      positions: 1,
      description: "",
      responsibility: "",
    },
    c_logo: null,
  };
  const [jobProps, setJobProps] = useState({ ...JOB_PROPS_DEFAULT_VALUE });

  const onHandleJobProps = (type, { target }) => {
    const { value } = target;
    setJobProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const onHandleData2 = (type1, type2, { target }) => {
    const { value } = target;
    setJobProps((prevState) => ({
      ...prevState,
      data: {
        ...prevState["data"],
        [type1]: {
          ...prevState["data"][type1],
          [type2]: value,
        },
      },
    }));
  };

  const onHandleData1 = (type, { target }) => {
    const { value } = target;
    setJobProps((prevState) => ({
      ...prevState,
      data: {
        ...prevState["data"],
        [type]: value,
      },
    }));
  };

  const onHandleJobSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(createJobs({ job: jobProps }));
    if (response) {
      setJobProps({ ...JOB_PROPS_DEFAULT_VALUE });
    }
  };
  return (
    <form className="jobs__form" onSubmit={onHandleJobSubmit}>
      <div className="row">
        <FormDropdown
          title="Select Logo"
          contents={companies.map((val) => val.name)}
          className="jobs__dropdown"
          onHandleDropdownValue={({ target }) => {
            const { value } = target;
            const logo = companies.find((val) => val.name == value).logo;
            onHandleJobProps("c_logo", { target: { value: logo } });
          }}
        />
      </div>
      {jobProps.c_logo && (
        <div>
          <Title variant="pr-16-1">Selected Company Logo</Title>

          <div className="row">
            <Image
              name={jobProps.c_logo}
              type="binary"
              className="jobs__logo"
            />
          </div>
        </div>
      )}
      <div className="row">
        <FormInput
          variant="1"
          title="Company name"
          value={jobProps.name}
          onHandleText={onHandleJobProps.bind(this, "name")}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.title}
          onHandleText={onHandleJobProps.bind(this, "title")}
          title="Job Title"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <Title variant="pr-16-1">Experience</Title>
      <div className="row">
        <div className="col-1-of-2">
          <FormInput
            variant="1"
            title="Minimum Experience (years)"
            value={jobProps.data.experience.min}
            onHandleText={onHandleData2.bind(this, "experience", "min")}
            className="jobs__formInput"
            type="number"
            placeholder=""
          />
        </div>
        <div className="col-1-of-2">
          <FormInput
            variant="1"
            title="Maximum Experience (years)"
            value={jobProps.data.experience.max}
            onHandleText={onHandleData2.bind(this, "experience", "max")}
            className="jobs__formInput"
            type="number"
            placeholder=""
          />
        </div>
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="City"
          value={jobProps.city}
          onHandleText={onHandleJobProps.bind(this, "city")}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          value={jobProps.data.salary.max}
          onHandleText={onHandleData2.bind(this, "salary", "max")}
          title="Salary"
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="How many positions?"
          value={jobProps.data.positions}
          onHandleText={onHandleData1.bind(this, "positions")}
          className="jobs__formInput"
          type="number"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Job description"
          value={jobProps.data.description}
          onHandleText={onHandleData1.bind(this, "description")}
          className="jobs__formInput"
          type="textarea"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="1"
          title="Job Responsibility"
          value={jobProps.data.responsibility}
          onHandleText={onHandleData1.bind(this, "responsibility")}
          className="jobs__formInput"
          type="textarea"
          placeholder=""
        />
      </div>
      <div className="row">
        <FormInput
          variant="2"
          title="Skills Required"
          value={jobProps.data.skills.join(" ")}
          onHandleText={({ target }) => {
            const { value } = target;
            const updatedValue = value.split(/[\s,]+/).filter((val) => !!val);
            onHandleData1("skills", { target: { value: updatedValue } });
          }}
          className="jobs__formInput"
          type="textarea"
          placeholder=""
        />
      </div>
      <Button variant="1-3" content="Submit" type="submit" />
    </form>
  );
};

const mapStateToProps = (state) => ({
  companies: state.admin.companies,
});

export default connect(mapStateToProps)(JobForm);
