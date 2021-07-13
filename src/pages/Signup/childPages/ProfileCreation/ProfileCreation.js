import React, { useState } from "react";

import moment from "moment";

import Title from "../../../../components/atoms/Title";
import Image from "../../../../components/atoms/Image";
import Stepper from "./container/Stepper";
import PersonalInformation from "./container/PersonalInformation";
import Qualification from "./container/Qualification";
import Profession from "./container/Profession";
import Skills from "./container/Skills";
import EmployeeDetails from "./container/EmployeeDetails";
import Overseas from "./container/Overseas";
import Upload from "./container/Upload";
import Resume from "./container/Resume";
import { EMPLOYEE_DETAILS_DEFAULT_VALUE } from "../../data";
import { connect } from "react-redux";
import { createProfile } from "../../../../redux/actions/profile.actions";

const ProfileCreation = ({ match, dispatch }) => {
  const step = match.params.step;

  const [profileProps, setProfileProps] = useState({
    1: {
      fullName: "",
      gender: "",
      dateOfBirth: moment().format("yyyy-MM-DD"),
      maritalStatus: "",
      email: "",
      address: {
        houseNo: "",
        street: "",
        state: "",
        district: "",
        region: "",
        pin: "",
      },
      permanentAddress: {
        houseNo: "",
        street: "",
        state: "",
        district: "",
        region: "",
        pin: "",
      },
      sameAsAddress: false,
    },
    3: {
      technical: "",
      nonTechnical: "",
    },
    5: {
      empDetails: [{ ...EMPLOYEE_DETAILS_DEFAULT_VALUE }],
    },
    6: {
      overseas: false,
      passport: false,
    },
    7: {
      file: null,
      resumeCopy: true,
    },
  });

  const onHandleInfo = (type, { target }) => {
    const { value } = target;
    setProfileProps((prevState) => ({
      ...prevState,
      [step]: { ...prevState[step], [type]: value },
    }));
  };

  const onHandleSetAddress = (type1, type2, { target }) => {
    const { value } = target;
    setProfileProps((prevState) => ({
      ...prevState,
      [step]: {
        ...prevState[step],
        [type1]: {
          ...prevState[step][type1],
          [type2]: value,
        },
      },
    }));
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
        setProfileProps((prevState) => ({
          ...prevState,
          [step]: {
            ...prevState[step],
            file: e.target.result,
          },
        }));
      };
    }
  };

  const onAddExperience = () =>
    setProfileProps((prevState) => ({
      ...prevState,
      [step]: {
        empDetails: [
          ...prevState[step].empDetails,
          { ...EMPLOYEE_DETAILS_DEFAULT_VALUE },
        ],
      },
    }));

  const onDeleteExperience = (index) => {
    const empDetailsCopy = JSON.parse(
      JSON.stringify(profileProps[step].empDetails)
    );
    empDetailsCopy.splice(index, 1);
    setProfileProps((prevState) => ({
      ...prevState,
      [step]: {
        empDetails: [...empDetailsCopy],
      },
    }));
  };

  const onHandleSaveHandle = () =>
    dispatch(createProfile(profileProps[step], step));

  const getComponent = () => {
    switch (step) {
      case "1":
        return (
          <PersonalInformation
            info={profileProps[step]}
            onHandleProfileInfo={onHandleInfo}
            onHandleSetAddress={onHandleSetAddress}
            onHandleSaveHandle={onHandleSaveHandle}
          />
        );
      case "2":
        return <Qualification />;
      case "3":
        return (
          <Profession
            info={profileProps[step]}
            onHandleProfessionInfo={onHandleInfo}
          />
        );
      case "4":
        return <Skills />;
      case "5":
        return (
          <EmployeeDetails
            info={profileProps[step].empDetails}
            onAddExperience={onAddExperience}
            onDeleteExperience={onDeleteExperience}
          />
        );
      case "6":
        return (
          <Overseas
            info={profileProps[step]}
            onHandleOverseasInfo={onHandleInfo}
          />
        );
      case "7":
        return (
          <Upload
            info={profileProps[step]}
            onHandleImage={onHandleImage}
            onHandleUploadInfo={onHandleInfo}
          />
        );
      case "8":
        return <Resume />;
      default:
        return (
          <PersonalInformation
            info={profileProps[step]}
            onHandleProfileInfo={onHandleInfo}
            onHandleSetAddress={onHandleSetAddress}
          />
        );
    }
  };
  return (
    <section className="section-profile-creaton">
      <Image name="hexagon" className="authentication__hexagon1" />
      <Image name="hexagon" className="authentication__hexagon2" />
      <Title variant="pm-26-1" className="u-text-center u-width-100">
        Create your Eshramik resume
      </Title>
      <Stepper step={step} total={8} />
      {getComponent()}
    </section>
  );
};

export default connect()(ProfileCreation);
