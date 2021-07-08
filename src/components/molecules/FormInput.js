import React from "react";

import Title from "../atoms/Title";
import Input from "../atoms/Input";

const FormInput = ({ title, variant = "2", ...rest }) => {
  return (
    <div className="form__inputGroup">
      <Title variant="pr-16-1" className="form__calendarGroup--text u-margin-bottom-10">
        {title}
      </Title>
      <Input variant={variant} {...rest} />
    </div>
  );
};

export default FormInput;
