import React, { useRef } from "react";
import Button from "./Button";

const Input = ({
  onHandleText,
  onHandleFile,
  variant,
  placeholder = "Enter Text",
  className,
  type = "text",
  ...rest
}) => {
  if (type == "file") {
    const ref = useRef();
    return (
      <div>
        <Button
          variant="2"
          onButtonClick={() => ref.current.click()}
          content="Upload Document"
        />
        <input
          ref={ref}
          className="form__inputfile"
          onChange={onHandleFile}
          type="file"
          {...rest}
          multiple
        />
      </div>
    );
  }
  return (
    <input
      placeholder={placeholder}
      onChange={onHandleText}
      className={`form__input-${variant} ${className}`}
      type={type}
      {...rest}
    />
  );
};

export default Input;
