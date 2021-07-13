import React from "react";

import Title from "../../../../../components/atoms/Title";
import Image from "../../../../../components/atoms/Image";
import Button from "../../../../../components/atoms/Button";
import RadioGroup from "../../../../../components/molecules/RadioGroup";
import { SKILLS_CONTENT } from "../data";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Text from "../../../../../components/atoms/Text";

const Skills = ({
  info,
  onHandleSkillInfo,
  onHandleSetExperience,
  onHandleSave,
}) => {
  return (
    <div style={{ paddingBottom: "12rem" }}>
      <div className="row">
        <div className="col-1-of-2">
          <Image name="profile-banner" />
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <Title variant="pr-24-1">4. Skills</Title>
          </div>
          <div className="row u-margin-bottom-0">
            <RadioGroup
              value={info.skills}
              column={2}
              contents={SKILLS_CONTENT.radioContent}
              onHandleRadioClick={onHandleSkillInfo.bind(this, "skills")}
            />
          </div>
          <div className="authentication__experienceContainer">
            <Title variant="pr-24-1">Total experience</Title>
            <div className="row">
              <div className="col-1-of-2">
                <FormDropdown
                  placeholder="YY"
                  value={info.experience.year.toString()}
                  contents={[...Array(25).keys()]}
                  onHandleDropdownValue={({ target }) => {
                    const value = parseInt(target.value);
                    onHandleSetExperience("experience", "year", {
                      target: { value },
                    });
                  }}
                />
              </div>
              <div className="col-1-of-2">
                <FormDropdown
                  placeholder="MM"
                  value={info.experience.month.toString()}
                  contents={[...Array(12).keys()]}
                  onHandleDropdownValue={({ target }) => {
                    const value = parseInt(target.value);
                    onHandleSetExperience("experience", "month", {
                      target: { value },
                    });
                  }}
                />
              </div>
            </div>
            <Text variant="pl-16-1">{`${
              info.experience.year ? info.experience.year + " year" : ""
            } ${
              info.experience.month ? info.experience.month + " months" : ""
            }`}</Text>
          </div>
          <div className="row">
            <Button onButtonClick={onHandleSave} content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
