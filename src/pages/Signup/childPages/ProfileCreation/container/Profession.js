import React from "react";

import Title from "../../../../../components/atoms/Title";
import Image from "../../../../../components/atoms/Image";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import { connect } from "react-redux";

const Profession = ({
  info,
  onHandleProfessionInfo,
  technicals,
  nonTechnicals,
}) => {
  const technicalList = technicals.map((technical) => technical.name);
  const nonTechnicalList = nonTechnicals.map(
    (nonTechnical) => nonTechnical.name
  );
  return (
    <div style={{ paddingBottom: "8rem" }}>
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
              placeholder=""
              value={info.technical}
              contents={technicalList}
              onHandleDropdownValue={onHandleProfessionInfo.bind(
                this,
                "technical"
              )}
              title="Technical"
            />
          </div>
          <div className="row">
            <FormDropdown
              placeholder=""
              value={info.nonTechnical}
              contents={nonTechnicalList}
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

const mapStateToProps = (state) => ({
  technicals: state.profile.technical,
  nonTechnicals: state.profile.nonTechnical,
});

export default connect(mapStateToProps)(Profession);
