import React from "react";

import Title from "../../../../../components/atoms/Title";
import Image from "../../../../../components/atoms/Image";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";

const Profession = ({ info, onHandleProfessionInfo }) => {
  return (
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Image name="profile-banner" />
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <Title variant="pr-24-1">3. Profession</Title>
          </div>
          <div className="row">
            <FormDropdown
              value={info.technical}
              onHandleDropdownValue={onHandleProfessionInfo.bind(
                this,
                "technical"
              )}
              title="Technical"
            />
          </div>
          <div className="row">
            <FormDropdown
              value={info.nonTechnical}
              onHandleDropdownValue={onHandleProfessionInfo.bind(
                this,
                "nonTechnical"
              )}
              title="Non technical"
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

export default Profession;
