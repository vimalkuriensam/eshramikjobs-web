import React, { useRef } from "react";
import Button from "./Button";

const Input = ({
  onHandleText,
  onHandleFile,
  variant,
  content="Upload Document",
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
          variant="4"
          onButtonClick={() => ref.current.click()}
          content={content}
          {...rest}
        />
        <input
          ref={ref}
          className="form__inputfile"
          onChange={onHandleFile}
          type="file"
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
