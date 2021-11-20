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

const PersonalEditInfo = function ({ info, onHandleClose }) {
  const [edit, setEdit] = useState({ ...info });
  console.log(edit);
  const onHandlePersonalInfo = (type, { target }) => {
    console.log(type, target);
    const { value } = target;
    setEdit((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Personal Info
      </Title>
      <div className="profile__popupMainContent">
        <div className="row u-margin-top-30">
          <FormInput
            variant="1"
            value={edit.full_name}
            placeholder=""
            title="Full Name"
            onHandleText={onHandlePersonalInfo.bind(this, "full_name")}
          />
        </div>
        <div className="row u-margin-top-30">
          <div className="col-1-of-2">
            <FormCalendar
              title="Date of Birth"
              value={moment(edit.dob).valueOf()}
              onHandleCalendar={({ target }) => {
                const date = moment(target.value).format("yyyy-MM-DD");
                onHandlePersonalInfo("dob", {
                  target: { value: date },
                });
              }}
            />
          </div>
          <div className="col-1-of-2">
            <FormRadioGroup
              className="profile__radioGroup"
              title="Gender"
              value={edit.gender}
              contents={[
                { id: "male", title: "Male", name: "gender-personal" },
                { id: "female", title: "Female", name: "gender-personal" },
              ]}
              onHandleRadioClick={onHandlePersonalInfo.bind(this, "gender")}
            />
          </div>
        </div>
        <div className="row u-margin-top-30">
          <div className="col-1-of-2">
            <FormRadioGroup
              className="profile__radioGroup"
              title="Marital Status"
              value={edit.marital_status}
              onHandleRadioClick={onHandlePersonalInfo.bind(
                this,
                "marital_status"
              )}
              contents={[
                { id: "married", title: "Married", name: "marital-personal" },
                {
                  id: "single",
                  title: "Unmarried",
                  name: "marital-personal",
                },
              ]}
            />
          </div>
        </div>
        <div className="row u-margin-top-30">
          <FormInput
            variant="1"
            placeholder=""
            title="House Number"
            value={edit.per_house_no}
            onHandleText={onHandlePersonalInfo.bind(this, "per_house_no")}
          />
        </div>
        <div className="row u-margin-top-30">
          <FormInput
            variant="1"
            placeholder=""
            title="Street Locality"
            value={edit.per_street_locality}
            onHandleText={onHandlePersonalInfo.bind(
              this,
              "per_street_locality"
            )}
          />
        </div>
        <div className="row u-margin-top-30">
          <FormInput
            variant="1"
            placeholder=""
            title="Pin code"
            value={edit.per_pin}
            onHandleText={onHandlePersonalInfo.bind(this, "per_pin")}
          />
        </div>
        <div className="row u-margin-top-30">
          <FormInput
            variant="1"
            placeholder=""
            title="House Number"
            value={edit.per_house_no}
            onHandleText={onHandlePersonalInfo.bind(this, "per_house_no")}
          />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown title="Region" placeholder="" value={edit.per_region} />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown
            title="District"
            placeholder=""
            value={edit.per_district}
          />
        </div>
        <div className="row u-margin-top-30">
          <FormDropdown title="State" placeholder="" value={edit.per_state} />
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
          <PersonalEditInfo info={props.info} />
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
