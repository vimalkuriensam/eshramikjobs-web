import React from "react";

import Title from "../../../../../components/atoms/Title";
import Text from "../../../../../components/atoms/Text";
import Input from "../../../../../components/atoms/Input";

const Details = () => {
  return (
    <div className="authentication__otpContainer">
      <Title variant="pm-30-1">OTP Verification</Title>
      <div className="u-margin-top-4">
        {[1, 2, 3, 4].map((val, index) => (
          <Input
            key={index}
            variant="3"
            placeholder=""
            className="u-margin-left-15"
          />
        ))}
      </div>
      <Text variant="pr-18-1" className="u-margin-top-20">
        Please enter verification code
      </Text>
      <Text>
        <Text variant="pr-18-1">Didn't get the code?</Text>
        <Text variant="pr-18-3" className="u-margin-left-5">
          Resend
        </Text>
      </Text>

      <div className="authentication__hexagon u-margin-top-4">
        <div className="authentication__hexagon--inner">
          <Title variant="pb-21-1">60 Sec</Title>
        </div>
      </div>
    </div>
  );
};

export default Details;
