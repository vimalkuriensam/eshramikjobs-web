import React from "react";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import { RESUME_UPLOAD } from "../data";

const Upload = () => {
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
            <Input type="file" content="Select Photo" icon="Photos" />
          </div>
          <div className="row">
            <FormRadioGroup
              title={RESUME_UPLOAD.resumeCopy.title}
              contents={RESUME_UPLOAD.resumeCopy.contents}
            />
          </div>
          <div className="row">
            <Button content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
