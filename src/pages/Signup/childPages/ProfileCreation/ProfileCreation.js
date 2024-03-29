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
import { createProfile, onHandleResumeSend } from "../../../../redux/actions/profile.actions";
import { fileUpload } from "../../../../redux/actions/utils.action";

const ProfileCreation = ({ match, dispatch }) => {
  const step = match.params.step;

  const [profileProps, setProfileProps] = useState({
    1: {
      fullName: "",
      gender: "",
      dob: moment().format("yyyy-MM-DD"),
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
    2: {
      school: "",
      board: "",
      specialization: "",
      institution: "",
      degree: "",
      college: "",
    },
    3: {
      technical: "",
      nonTechnical: "",
    },
    4: {
      skill: "",
      skillList: [],
      experience: {
        year: "",
        month: "",
      },
    },
    5: {
      empDetails: [{ ...EMPLOYEE_DETAILS_DEFAULT_VALUE }],
    },
    6: {
      overseas: false,
      validPassport: false,
    },
    7: {
      file: null,
      fileURL: null,
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

  const onHandleEmployeeDetails = (type, index, { target }) => {
    const { value } = target;
    let profilePropsCopy = [...profileProps[step].empDetails];
    profilePropsCopy[index][type] = value;
    setProfileProps((prevState) => ({
      ...prevState,
      [step]: { empDetails: [...profilePropsCopy] },
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
            fileURL: e.target.result,
            file,
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

  const onHandleSave = () => dispatch(createProfile(profileProps[step], step));

  const onHandleUploadImage = async (isResume) => {
    if (profileProps[step]?.file) {
      const { url } = await dispatch(
        fileUpload({ file: profileProps[step]?.file })
      );
      if (url) {
        dispatch(
          createProfile(
            {
              photo: url,
              isResume: isResume == "true",
            },
            step
          )
        );
      }
    }
  };

  const onSendResume = ({ email, mobile }) =>
    dispatch(onHandleResumeSend({ email, mobile }));

  const getComponent = () => {
    switch (step) {
      case "1":
        return (
          <PersonalInformation
            info={profileProps[step]}
            onHandleProfileInfo={onHandleInfo}
            onHandleSetAddress={onHandleSetAddress}
            onHandleSave={onHandleSave}
          />
        );
      case "2":
        return (
          <Qualification
            info={profileProps[step]}
            onHandleQualificationInfo={onHandleInfo}
            onHandleSave={onHandleSave}
          />
        );
      case "3":
        return (
          <Profession
            info={profileProps[step]}
            onHandleProfessionInfo={onHandleInfo}
            onHandleSave={onHandleSave}
          />
        );
      case "4":
        return (
          <Skills
            info={profileProps[step]}
            onHandleSkillInfo={onHandleInfo}
            onHandleSave={onHandleSave}
            onHandleSetExperience={onHandleSetAddress}
          />
        );
      case "5":
        return (
          <EmployeeDetails
            info={profileProps[step].empDetails}
            onAddExperience={onAddExperience}
            onDeleteExperience={onDeleteExperience}
            onHandleEmployeeDetails={onHandleEmployeeDetails}
            onHandleSave={onHandleSave}
          />
        );
      case "6":
        return (
          <Overseas
            info={profileProps[step]}
            onHandleOverseasInfo={onHandleInfo}
            onHandleSave={onHandleSave}
          />
        );
      case "7":
        return (
          <Upload
            info={profileProps[step]}
            onHandleImage={onHandleImage}
            onHandleUploadInfo={onHandleInfo}
            onHandleSave={onHandleUploadImage}
          />
        );
      case "8":
        return <Resume info={profileProps[step]} onSendResume={onSendResume} />;
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
    <section className="section-profile-creaton page">
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
