import React from "react";

import Text from "../atoms/Text";
import RadioGroup from "./RadioGroup";

const FormRadioGroup = ({ title, className, ...rest }) => {
  return (
    <div>
      <Text variant="r-14-400-1" className={`${className}--title`}>
        {title}
      </Text>
      <RadioGroup className={className} {...rest} />
    </div>
  );
};

export default FormRadioGroup;
