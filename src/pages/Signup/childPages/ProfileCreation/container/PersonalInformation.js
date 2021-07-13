import React from "react";

import validator from "validator";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";
import FormCalendar from "../../../../../components/molecules/FormCalendar";
import moment from "moment";
import { connect } from "react-redux";
import {
  getAddressByPin,
  setAddressRegion,
} from "../../../../../redux/actions/profile.actions";

const PersonalInformation = ({
  info,
  addressStates,
  addressDistrict,
  addressRegion,
  permanentStates,
  permanentDistrict,
  permanentRegion,
  onHandleProfileInfo,
  onHandleSetAddress,
  onHandleSaveHandle,
  dispatch,
}) => {
  const onHandlePin = ({ target }) => {
    const pin = target.value;
    if (!pin || validator.isNumeric(pin)) {
      if (pin.length == 6)
        dispatch(getAddressByPin(pin)).then((response) => {
          console.log(response);
          if (response.length) {
            onHandleSetAddress("address", "state", {
              target: { value: response[0].state },
            });
            onHandleSetAddress("address", "district", {
              target: { value: response[0].district },
            });
            const regionContents = response.map((val) => val.post_office);
            console.log(regionContents);
            dispatch(setAddressRegion({ region: regionContents }));
          }
        });
      onHandleSetAddress("address", "pin", {
        target: { value: pin },
      });
    }
  };

  return (
    <div>
      <Title variant="pr-24-1">1. Personal Information</Title>
      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormInput
              value={info.fullName}
              onHandleText={onHandleProfileInfo.bind(this, "fullName")}
              title="Full name"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormCalendar
              title="Date of birth"
              value={moment(info.dateOfBirth).valueOf()}
              onHandleDate={({ target }) => {
                const date = moment(target.value).format("yyyy-MM-DD");
                onHandleProfileInfo("dateOfBirth", { target: { value: date } });
              }}
            />
          </div>
          <div className="row">
            <FormRadioGroup
              value={info.gender}
              title="Gender"
              onHandleRadioClick={onHandleProfileInfo.bind(this, "gender")}
              contents={[
                { id: "male", title: "Male", name: "gender" },
                { id: "female", title: "Female", name: "gender" },
                { id: "others", title: "Others", name: "gender" },
              ]}
            />
          </div>
          <div className="row">
            <FormRadioGroup
              title="Marital Status"
              value={info.maritalStatus}
              onHandleRadioClick={onHandleProfileInfo.bind(
                this,
                "maritalStatus"
              )}
              contents={[
                { id: "married", title: "Married", name: "status" },
                { id: "single", title: "Unmarried", name: "status" },
              ]}
            />
          </div>
          <div className="row">
            <FormInput
              value={info.address.houseNo}
              onHandleText={onHandleSetAddress.bind(this, "address", "houseNo")}
              title="House number"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormInput
              value={info.address.street}
              onHandleText={onHandleSetAddress.bind(this, "address", "street")}
              title="Street locality"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormInput
              value={info.address.pin}
              onHandleText={onHandlePin}
              title="Pin code"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormDropdown
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "address",
                "state"
              )}
              value={info.address.state}
              title="State"
            />
          </div>
          <div className="row">
            <FormDropdown
              value={info.address.district}
              title="District"
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "address",
                "district"
              )}
            />
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="row">
            <FormDropdown
              value={info.address.region}
              contents={addressRegion}
              title="Region"
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "address",
                "region"
              )}
            />
          </div>
          <div className="row">
            <Checkbox
              id="sameAsAddress"
              value={info.sameAsAddress}
              checkBoxInput={onHandleProfileInfo.bind(this, "sameAsAddress")}
              className="u-margin-top-50"
            >
              Permanent address as previous
            </Checkbox>
          </div>
          <div className="row">
            <FormInput
              title="House number"
              onHandleText={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "houseNo"
              )}
              value={
                info.sameAsAddress
                  ? info.address.houseNo
                  : info.permanentAddress.houseNo
              }
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormInput
              value={
                info.sameAsAddress
                  ? info.address.street
                  : info.permanentAddress.street
              }
              title="Street locality"
              onHandleText={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "street"
              )}
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormInput
              value={
                info.sameAsAddress
                  ? info.address.pin
                  : info.permanentAddress.pin
              }
              onHandleText={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "pin"
              )}
              title="Pin code"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormDropdown
              value={
                info.sameAsAddress
                  ? info.address.state
                  : info.permanentAddress.state
              }
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "state"
              )}
              title="State"
            />
          </div>
          <div className="row">
            <FormDropdown
              value={
                info.sameAsAddress
                  ? info.address.district
                  : info.permanentAddress.district
              }
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "district"
              )}
              title="District"
            />
          </div>
          <div className="row">
            <FormDropdown
              value={
                info.sameAsAddress
                  ? info.address.region
                  : info.permanentAddress.region
              }
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "region"
              )}
              contents={info.sameAsAddress ? addressRegion : permanentRegion}
              title="Region"
            />
          </div>
          <div className="row">
            <FormInput
              value={info.email}
              onHandleText={onHandleProfileInfo.bind(this, "email")}
              title="Email"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <Button
              onButtonClick={onHandleSaveHandle}
              content="next"
              variant="1-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  addressStates: state.profile.addressState,
  addressDistrict: state.profile.addressDistrict,
  addressRegion: state.profile.addressRegion,
  permanentStates: state.profile.permanentAddressState,
  permanentDistrict: state.profile.permanentAddressDistrict,
  permanentRegion: state.profile.permanentAddressRegion,
});

export default connect(mapStateToProps)(PersonalInformation);
