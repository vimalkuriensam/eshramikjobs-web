import React, { useState } from "react";

import validator from "validator";

import Button from "../../../../../components/atoms/Button";
import Checkbox from "../../../../../components/atoms/Checkbox";
import Icon from "../../../../../components/atoms/Icon";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";

const Resume = ({ onSendResume }) => {
  const [info, setInfo] = useState({
    tos: false,
    mobile: "",
    email: "",
  });

  const onHandleEdit = (type, { target }) => {
    const { value } = target;
    setInfo((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const onHandleResume = () => {
    const { mobile, email } = info;
    let isValidMobile = true,
      isValidEmail = true;
    if (mobile && !validator.isNumeric(mobile)) {
      isValidMobile = false;
    }
    if (email && !validator.isEmail(email)) {
      isValidEmail = false;
    }
    if (isValidMobile && isValidEmail) onSendResume({ mobile, email });
  };

  return (
    <div>
      <div className="row">
        <div className="col-3-of-5">
          <Title variant="pr-17-1">Resume builder</Title>
          <br />
          <Checkbox
            value={info.tos}
            id="resume-tos"
            variant="2"
            checkBoxInput={onHandleEdit.bind(this, "tos")}
          >
            Terms of service are the legal agreements between a service provider
            and a person who wants to use that service. The person must agree to
            abide by the terms of service in order to use the offered service.
          </Checkbox>
          <Title variant="pr-17-5" className="u-margin-top-50">
            Send Resume on
          </Title>
          <div className="authentication__contact u-margin-vertical-15">
            <Icon name="Whatsapp" />
            <Title variant="pr-17-3">Whatsapp Number</Title>
          </div>
          <Input
            variant="1"
            placeholder=""
            onHandleText={onHandleEdit.bind(this, "mobile")}
            value={info.mobile}
          />
          <div className="authentication__contact u-margin-top-20">
            <Icon name="Email" />
            <Title variant="pr-17-3">Email Id</Title>
          </div>
          <Input
            variant="1"
            placeholder=""
            className="u-margin-top-10"
            onHandleText={onHandleEdit.bind(this, "email")}
            value={info.email}
          />
          <Button
            content="Finish"
            disabled={!info.tos}
            type="submit"
            className="authentication__signupCTA u-margin-top-30"
            variant="1-4"
            onButtonClick={onHandleResume}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
