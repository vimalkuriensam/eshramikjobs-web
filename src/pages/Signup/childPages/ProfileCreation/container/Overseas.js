import React from "react";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Title from "../../../../../components/atoms/Title";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import { OVERSEAS_OPPORTUNITY } from "../data";

const Overseas = () => {
  return (
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Image name="profile-banner" />
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <Title variant="pr-24-1">{OVERSEAS_OPPORTUNITY.title}</Title>
          </div>
          <div className="row">
            <FormRadioGroup
              title={OVERSEAS_OPPORTUNITY.overseasRadio.title}
              contents={OVERSEAS_OPPORTUNITY.overseasRadio.contents}
            />
          </div>
          <div className="row">
            <FormRadioGroup
              title={OVERSEAS_OPPORTUNITY.passport.title}
              contents={OVERSEAS_OPPORTUNITY.passport.contents}
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

export default Overseas;
