import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";

import Title from "../../../../../components/atoms/Title";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import FormInput from "../../../../../components/molecules/FormInput";
import { setCompanyDetails } from "../../../../../redux/actions/authentication.action";
import history from "../../../../../utils/history";

const Details = ({ states = [], dispatch }) => {
  const mappedStates = states.map((val) => val.state);
  const [detailProps, setDetailProps] = useState({
    name: "",
    add: {
      address: "",
      city: "",
      state: "",
      pin: "",
    },
    logoFile: null,
    logoURL: null,
  });

  const onHandleDetailProps = (type1, type2 = null, { target }) => {
    const { value } = target;
    setDetailProps((prevState) => {
      if (type2) {
        return {
          ...prevState,
          [type1]: {
            ...prevState[type1],
            [type2]: value,
          },
        };
      } else {
        return {
          ...prevState,
          [type1]: value,
        };
      }
    });
  };

  const onHandleSubmit = async () => {
    const info = { ...detailProps };
    delete info.logoURL;
    const response = await dispatch(setCompanyDetails(info));
    if (response) window.location.href = "/recruite/create-jobs";
  };

  const onHandleImage = ({ target }) => {
    const file = target.files[0];
    const allowedFileTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];
    const type = file.type.split(".")[file.type.split(".").length - 1];
    if (allowedFileTypes.includes(type)) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        setDetailProps((prevState) => ({
          ...prevState,
          logoURL: e.target.result,
          logoFile: file,
        }));
      };
    }
  };

  return (
    <div className="authentication__recruiterDetails">
      <Title variant="pm-30-1" className="u-text-center u-display-block">
        Create Company Profile
      </Title>
      <div className="u-margin-top-50">
        <FormInput
          variant="1"
          title="Company Name"
          className="jobs__formInput"
          value={detailProps.name}
          onHandleText={onHandleDetailProps.bind(this, "name", null)}
          placeholder=""
        />
      </div>
      <div className="u-margin-top-30">
        <FormInput
          variant="1"
          title="Enter address"
          value={detailProps.add.address}
          onHandleText={onHandleDetailProps.bind(this, "add", "address")}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="u-margin-top-30">
        <FormInput
          variant="1"
          title="City"
          value={detailProps.add.city}
          onHandleText={onHandleDetailProps.bind(this, "add", "city")}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="u-margin-top-30">
        <FormInput
          variant="1"
          title="Pincode"
          value={detailProps.add.pin}
          onHandleText={onHandleDetailProps.bind(this, "add", "pin")}
          className="jobs__formInput"
          placeholder=""
        />
      </div>
      <div className="u-margin-top-30">
        <FormDropdown
          title="State"
          contents={mappedStates}
          filter={false}
          value={detailProps.add.state}
          onHandleDropdownValue={onHandleDetailProps.bind(this, "add", "state")}
          className="jobs__formDropdown"
          placeholder=""
        />
      </div>
      <div className="row u-margin-top-30">
        <div className="col-1-of-2 u-margin-top-50">
          <FormInput
            type="file"
            content="Select Logo"
            icon="Photos"
            onHandleFile={onHandleImage}
          />
        </div>
        <div className="col-1-of-2 u-text-right">
          {detailProps.logoFile ? (
            <Image
              type="binary"
              name={detailProps.logoURL}
              className="authentication__logo"
            />
          ) : (
            <span className="authentication__logo authentication__logo--empty">
              <Text variant="pr-18-1">Logo Here</Text>
            </span>
          )}
        </div>
      </div>
      <div className="authentication__companyProfileCTA">
        <Button variant="1-3" content="Submit" onButtonClick={onHandleSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  states: state.profile.addressState,
});

export default connect(mapStateToProps)(Details);
