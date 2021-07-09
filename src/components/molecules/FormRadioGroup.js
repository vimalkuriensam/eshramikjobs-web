import React from "react";

import Title from "../atoms/Title";
import RadioGroup from "./RadioGroup";

const FormRadioGroup = ({ title, className, ...rest }) => {
  return (
    <div>
      <Title variant="pr-16-1" className={`${className}--title u-margin-bottom-10`}>
        {title}
      </Title>
      <RadioGroup className={className} {...rest} />
    </div>
  );
};

export default FormRadioGroup;
