import React, { useRef } from "react";
import Button from "./Button";
import Icon from "./Icon";

const Input = ({
  onHandleText,
  onHandleFile,
  variant,
  content = "Upload Document",
  placeholder = "Enter Text",
  className,
  type = "text",
  refCallback,
  ...rest
}) => {
  const ref = useRef();

  const onChangeNumber = (val) => {
    if (val > 0) return ref.current.value++;
    return ref.current.value--;
  }
  if (type == "file") {
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
  } else if (type == "number") {
    return (
      <div className="form__input-number">
        <input
          placeholder={placeholder}
          onChange={onHandleText}
          className={`form__input-number-${variant} ${className}`}
          type="number"
          ref={ref}
          {...rest}
        />
        <div className={`form__input-number-${variant}--action`}>
          <button className={`form__input-number-${variant}--action1`} onClick={onChangeNumber.bind(this, -1)}>
            <Icon name="Minus" />
          </button>
          <button className={`form__input-number-${variant}--action2`} onClick={onChangeNumber.bind(this, 1)}>
            <Icon name="Plus2" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <input
      placeholder={placeholder}
      onChange={onHandleText}
      className={`form__input-${variant} ${className}`}
      type={type}
      ref={refCallback}
      {...rest}
    />
  );
};

export default Input;
