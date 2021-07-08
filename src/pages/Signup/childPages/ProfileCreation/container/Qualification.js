import React from "react";

import Button from "../../../../../components/atoms/Button";
import Title from "../../../../../components/atoms/Title";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";

const Qualification = () => {
  return (
    <div>
      <Title variant="pr-24-1">2. Qualification</Title>

      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormRadioGroup
              title="School"
              contents={[
                { id: "na", title: "NA", name: "school" },
                { id: "5g", title: "5th grade", name: "school" },
                { id: "8g", title: "8th grade", name: "school" },
                { id: "highschool", title: "High School", name: "school" },
                {
                  id: "seniorsecondary",
                  title: "Senior Secondary",
                  name: "school",
                },
              ]}
            />
          </div>

          <div className="row">
            <FormDropdown title="Board name" />
          </div>

          <div className="row">
            <FormRadioGroup
              title="Specialization/field of study"
              contents={[
                { id: "iti", title: "ITI", name: "field" },
                { id: "nctvt", title: "NCTVT", name: "field" },
                { id: "certification", title: "Certification", name: "field" },
                { id: "diploma", title: "Diploma", name: "field" },
                { id: "others", title: "Others", name: "field" },
              ]}
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
