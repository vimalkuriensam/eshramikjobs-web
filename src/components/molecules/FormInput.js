import React from "react";

import Title from "../atoms/Title";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";

const FormInput = ({
  title,
  variant = "2",
  type = "input",
  listings = true,
  ...rest
}) => {
  return (
    <div className="form__inputGroup">
      <Title
        variant="pr-16-1"
        className="form__calendarGroup--text u-margin-bottom-10"
      >
        {title}
      </Title>
      {type == "textarea" ? (
        <TextArea variant={variant} listings={listings} {...rest} />
      ) : (
        <Input variant={variant} type={type} {...rest} />
      )}
    </div>
  );
};

export default FormInput;
