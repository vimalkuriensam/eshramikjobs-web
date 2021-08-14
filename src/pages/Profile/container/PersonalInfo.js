import React, { forwardRef, useImperativeHandle } from "react";
import Text from "../../../components/atoms/Text";

const PersonalInfo = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      alert("Child function called personalInfo");
    },
  }));
  return (
    <div className="row u-margin-top-30">
      <div className="col-1-of-2">
        <Text variant="pl-14-1 u-display-block">Full name</Text>
        <Text variant="pl-14-3 u-display-block">Jhone Steve Dohe</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">
          Date of Birth
        </Text>
        <Text variant="pl-14-3 u-display-block">25 Feb 1990</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">Gender</Text>
        <Text variant="pl-14-3 u-display-block">Male</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">
          Area Pin Code
        </Text>
        <Text variant="pl-14-3 u-display-block">416112</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">
          Marital Status
        </Text>
        <Text variant="pl-14-3 u-display-block">Single</Text>
      </div>
      <div className="col-1-of-2">
        <Text variant="pl-14-1 u-display-block">Permanent Address</Text>
        <Text variant="pl-14-3 u-display-block">
          House no. 21, Magarpatta road
        </Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">Pin code</Text>
        <Text variant="pl-14-3 u-display-block">112054</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">State</Text>
        <Text variant="pl-14-3 u-display-block">Maharashtra</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">City</Text>
        <Text variant="pl-14-3 u-display-block">Pune</Text>
        <Text variant="pl-14-1 u-display-block u-margin-top-30">District</Text>
        <Text variant="pl-14-3 u-display-block">Pune</Text>
      </div>
    </div>
  );
});

export default PersonalInfo;
