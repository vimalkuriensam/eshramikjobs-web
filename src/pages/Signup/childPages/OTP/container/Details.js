import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import Title from "../../../../../components/atoms/Title";
import Text from "../../../../../components/atoms/Text";
import Input from "../../../../../components/atoms/Input";
import {
  resendOTP,
  setOTP,
} from "../../../../../redux/actions/authentication.action";

const Details = ({ dispatch, mobile, email }) => {
  const [resendTime, setResendTime] = useState(60);
  const [timerId, setTimerId] = useState();
  const [autoSubmitId, setAutoSubmitId] = useState();
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  const [autoSubmitTime, setAutoSubmitTime] = useState(2);

  const firstInputRef = useRef(null),
    secondInputRef = useRef(null),
    thirdInputRef = useRef(null),
    fourthInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
    const timer = setInterval(() => {
      setResendTime((prevState) => prevState - 1);
    }, 1000);
    setTimerId(timer);

    return () => {
      clearInterval(timerId);
      clearInterval(autoSubmitId);
    };
  }, []);

  useEffect(() => {
    if (!resendTime) clearInterval(timerId);
  }, [resendTime]);

  useEffect(() => {
    if (!autoSubmitTime) {
      clearInterval(autoSubmitId);
      dispatch(
        setOTP({
          mobile,
          email,
          otp: otpArray.join(""),
        })
      );
    }
  }, [autoSubmitTime]);

  const refCallback = (textInputRef) => (node) => (textInputRef.current = node);

  const onHandleOTP =
    (index) =>
    ({ target }) => {
      const { value } = target;
      if (isNaN(Number(value))) return;
      const otpArrayCopy = [...otpArray];
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      if (value !== "") {
        if (index === 0) secondInputRef.current.focus();
        else if (index === 1) thirdInputRef.current.focus();
        else if (index === 2) fourthInputRef.current.focus();
        else {
          const id = setInterval(
            () => setAutoSubmitTime((prevState) => prevState - 1),
            1000
          );
          setAutoSubmitId(id);
        }
      }
    };

  const onHandleResendOTP = () => dispatch(resendOTP({ mobile, email }));

  const onHandleKeyPress = (index) => (e) => {
    if (e.key === "Backspace" && otpArray[index] === "") {
      clearInterval(autoSubmitId);
      if (index === 1) firstInputRef.current.focus();
      else if (index === 2) secondInputRef.current.focus();
      else if (index === 3) thirdInputRef.current.focus();
    }
  };

  return (
    <div className="authentication__otpContainer">
      <Title variant="pm-30-1">OTP Verification</Title>
      <div className="u-margin-top-4">
        {[firstInputRef, secondInputRef, thirdInputRef, fourthInputRef].map(
          (inputRefs, index) => (
            <Input
              key={index}
              variant="3"
              placeholder=""
              className="u-margin-left-15"
              maxLength="1"
              value={otpArray[index]}
              refCallback={refCallback(inputRefs)}
              onHandleText={onHandleOTP(index)}
              onKeyDown={onHandleKeyPress(index)}
            />
          )
        )}
      </div>
      <Text variant="pr-18-1" className="u-margin-top-20">
        Please enter verification code
      </Text>
      {!resendTime ? (
        <Text>
          <Text variant="pr-18-1">Didn't get the code?</Text>
          <span onClick={onHandleResendOTP}>
            <Text
              variant="pr-18-3"
              className="u-margin-left-5 u-cursor-pointer"
            >
              Resend
            </Text>
          </span>
        </Text>
      ) : null}

      {!!resendTime && (
        <div className="authentication__hexagon u-margin-top-4">
          <div className="authentication__hexagon--inner">
            <Title variant="pb-21-1">{resendTime} Sec</Title>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(Details);
