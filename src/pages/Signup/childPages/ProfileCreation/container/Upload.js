import React, { useState } from "react";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import { RESUME_UPLOAD } from "../data";

const Upload = ({ info, onHandleImage, onHandleSave }) => {
  const [resumeCopy, setResumeCopy] = useState(false);
  const onHandleResumeCopy = ({ target }) => {
    const { value } = target;
    setResumeCopy(value);
  };
  return (
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Image name="profile-banner" />
        </div>
        <div className="col-1-of-2">
          <div className="row">
            <Title variant="pr-24-1">{RESUME_UPLOAD.title}</Title>
          </div>
          <div className="row">
            <Input
              onHandleFile={onHandleImage}
              type="file"
              content="Select Photo"
              icon="Photos"
            />
          </div>
          {info.file && (
            <div className="authentication__profileContainer">
              <Image
                className="authentication__profileImage"
                name={info.file}
                type="binary"
              />
            </div>
          )}
          <div className="row">
            <FormRadioGroup
              value={resumeCopy.toString()}
              title={RESUME_UPLOAD.resumeCopy.title}
              contents={RESUME_UPLOAD.resumeCopy.contents}
              onHandleRadioClick={onHandleResumeCopy}
            />
          </div>
          <div className="row">
            <Button onButtonClick={onHandleSave} content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
