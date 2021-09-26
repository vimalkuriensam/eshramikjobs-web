import moment from "moment";
import React, { forwardRef, Fragment, useImperativeHandle } from "react";
import Text from "../../../components/atoms/Text";

const PersonalInfo = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      alert("Child function called personalInfo");
    },
  }));

  const {
    full_name,
    dob,
    gender,
    marital_status,
    per_district,
    per_house_no,
    per_pin,
    per_region,
    per_state,
    per_street_locality,
  } = props.info;
  return (
    <Fragment>
      <div className="row u-margin-top-30">
        <div className="col-1-of-2">
          <Text variant="pl-14-1 u-display-block">Full name</Text>
          <Text variant="pl-14-3 u-display-block">{full_name}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">
            Date of Birth
          </Text>
          <Text variant="pl-14-3 u-display-block">
            {moment(dob).format("DD MMM YYYY")}
          </Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">Gender</Text>
          <Text variant="pl-14-3 u-display-block">{gender}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">
            Area Pin Code
          </Text>
          <Text variant="pl-14-3 u-display-block">{per_pin}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">
            Marital Status
          </Text>
          <Text variant="pl-14-3 u-display-block">{marital_status}</Text>
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-14-1 u-display-block">Permanent Address</Text>
          <Text variant="pl-14-3 u-display-block">
            {per_house_no}, {per_street_locality}
          </Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">
            Pin code
          </Text>
          <Text variant="pl-14-3 u-display-block">{per_pin}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">State</Text>
          <Text variant="pl-14-3 u-display-block">{per_state}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">City</Text>
          <Text variant="pl-14-3 u-display-block">{per_district}</Text>
          <Text variant="pl-14-1 u-display-block u-margin-top-30">Region</Text>
          <Text variant="pl-14-3 u-display-block">{per_region}</Text>
        </div>
      </div>
    </Fragment>
  );
});

export default PersonalInfo;
