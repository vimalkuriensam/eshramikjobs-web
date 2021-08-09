import React, { useEffect, useRef, useState } from "react";

import Icon from "./Icon";
import Input from "./Input";
import Text from "./Text";
import Button from "./Button";

const Dropdown = ({
  contents,
  value,
  placeholder = "Select",
  onHandleDropdownValue,
  className,
  filter = true,
}) => {
  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) setActive(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  useEffect(() => {
    setUpdatedContents(contents);
  }, [contents]);

  const [val, setVal] = useState();
  const [active, setActive] = useState(false);
  const [updatedContents, setUpdatedContents] = useState(contents);

  useEffect(() => {
    if (value) setVal(value);
  }, [value]);
  const menuRef = useRef();

  const onHandleListToggle = () => setActive((prevState) => !prevState);

  const onHandleValueSelect = (val) => {
    setActive(false);
    setVal(val);
    onHandleDropdownValue({ target: { value: val } });
  };

  const onSetContentFilter = (e) => {
    const text = e.target.value;
    let newContents = contents;
    newContents = newContents.filter((newContent) =>
      newContent.toLowerCase().includes(text.toLowerCase())
    );
    setUpdatedContents(newContents);
  };
  return (
    <div className={`form__dropdown-1 ${className}`} ref={menuRef}>
      <div className="form__dropdown-1--value" onClick={onHandleListToggle}>
        <span>
          <Text variant="r-14-400-2">{val || placeholder}</Text>
        </span>
        <span>
          <Button variant="2" icon="ArrowDown" content="" />
        </span>
      </div>
      {active && (
        <div className="form__dropdown-1--list">
          {filter && (
            <Input
              onHandleText={onSetContentFilter}
              placeholder="Filter"
              className="form__dropdown-1--input"
              autoFocus
            />
          )}
          <ul>
            {contents &&
              updatedContents.map((content, index) => (
                <li
                  onClick={onHandleValueSelect.bind(this, content)}
                  key={index}
                >
                  <Text variant="r-14-400-1">{content}</Text>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
