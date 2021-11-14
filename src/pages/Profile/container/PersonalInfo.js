import moment from "moment";
import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import FormCalendar from "../../../components/molecules/FormCalendar";
import FormDropdown from "../../../components/molecules/FormDropdown";
import FormInput from "../../../components/molecules/FormInput";
import FormRadioGroup from "../../../components/molecules/FormRadioGroup";
import Popup from "../../../components/molecules/Popup";

const PersonalEditInfo = function ({ onHandleClose }) {
  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Personal Info
      </Title>
      <div className="profile__popupMainContent">
        <div className="row u-margin-top-30">
          <FormInput variant="1" placeholder="" title="Full Name" />
        </div>
        <div className="row u-margin-top-30">
          <div className="col-1-of-2">
            <FormCalendar title="Date of Birth" />
          </div>
          <div className="col-1-of-2">
            <FormRadioGroup
              className="profile__radioGroup"
              title="Gender"
              contents={[
                { id: "male", title: "Male", name: "gender-personal" },
                { id: "female", title: "Female", name: "gender-personal" },
              ]}
            />
          </div>
        </div>
        <div className="row u-margin-top-30">
          <div className="col-1-of-2">
            <FormRadioGroup
              className="profile__radioGroup"
              title="Marital Status"
              contents={[
                { id: "married", title: "Married", name: "marital-personal" },
                {
                  id: "unmarried",
                  title: "Unmarried",
                  name: "marital-personal",
                },
              ]}
            />
          </div>
        </div>
        <div className="row u-margin-top-30">
          <FormInput variant="1" placeholder="" title="House Number" />
        </div>
        <div className="row u-margin-top-30">
          <FormInput variant="1" placeholder="" title="Street Locality" />
        </div>
        <div className="row u-margin-top-30">
          <FormInput variant="1" placeholder="" title="Pin code" />
        </div>
        <div className="row u-margin-top-30">
          <FormInput variant="1" placeholder="" title="House Number" />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown title="State" placeholder="" />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown title="City" placeholder="" />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown title="Region" placeholder="" />
        </div>
      </div>
      <div className="profile__popupCTA  profile__popupVerticalPadding">
        <Button content="Cancel" onButtonClick={onHandleClose} variant="6" />
        <Button content="Save" variant="1-4" />
      </div>
    </Fragment>
  );
};

const PersonalInfo = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));

  const [popup, setPopup] = useState(false);
  const onClosePopup = () => setPopup(false);

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
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <PersonalEditInfo />
        </Popup>
      )}
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
