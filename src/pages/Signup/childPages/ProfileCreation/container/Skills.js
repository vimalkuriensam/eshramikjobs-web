import React from "react";

import Title from "../../../../../components/atoms/Title";
import Image from "../../../../../components/atoms/Image";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import RadioGroup from "../../../../../components/molecules/RadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";

const Skills = () => {
  return (
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Image name="profile-banner" />
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <Title variant="pr-24-1">4. Skills</Title>
          </div>
          <div className="row">
            <RadioGroup
              column={2}
              contents={[
                { id: "highlyskilled", title: "Highly skilled", name: "skill" },
                { id: "semiskilled", title: "Semi skilled", name: "skill" },
                { id: "unskilled", title: "Unskillded", name: "skill" },
              ]}
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

export default Skills;
