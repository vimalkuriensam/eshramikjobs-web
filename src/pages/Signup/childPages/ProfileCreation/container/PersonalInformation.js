import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormRadioGroup from "../../../../../components/molecules/FormRadioGroup";
import Checkbox from "../../../../../components/atoms/Checkbox";
import FormCalendar from "../../../../../components/molecules/FormCalendar";

const PersonalInformation = ({
  info,
  onHandleProfileInfo,
  onHandleSetAddress,
}) => {
  return (
    <div>
      <Title variant="pr-24-1">1. Personal Information</Title>
      <div className="row">
        <div className="col-1-of-2">
          <div className="row">
            <FormInput
              value={info.name}
              onHandleText={onHandleProfileInfo.bind(this, "name")}
              title="Full name"
              placeholder=""
              variant="1"
            />
          </div>
          <div className="row">
            <FormCalendar
              title="Date of birth"
              value={info.dateOfBirth}
              onHandleDate={onHandleProfileInfo.bind(this, "dateOfBirth")}
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
              onHandleText={onHandleSetAddress.bind(this, "address", "pin")}
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
              value={info.address.region}
              title="City"
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "address",
                "region"
              )}
            />
          </div>
        </div>

        <div className="col-1-of-2">
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
                  ? info.address.region
                  : info.permanentAddress.region
              }
              onHandleDropdownValue={onHandleSetAddress.bind(
                this,
                "permanentAddress",
                "region"
              )}
              title="City"
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
            <FormInput
              value={info.email}
              onHandleText={onHandleProfileInfo.bind(this, "email")}
              title="Email"
              placeholder=""
              variant="1"
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

export default PersonalInformation;
