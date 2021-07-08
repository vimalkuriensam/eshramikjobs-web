import React from "react";

import Icon from "../../../../../components/atoms/Icon";
import Text from "../../../../../components/atoms/Text";

const Stepper = ({ step = 1, total = 1 }) => {
  return (
    <div className="authentication__stepBox">
      <div className="authentication__stepContainer">
        <Icon name="ArrowLeft" />
        <div className="authentication__stepInfo">{step}</div>
        <Icon name="ArrowRight" />
      </div>
      <Text variant="pl-18-1 u-margin-top-5">
        {step} of {total}
      </Text>
    </div>
  );
};

export default Stepper;
