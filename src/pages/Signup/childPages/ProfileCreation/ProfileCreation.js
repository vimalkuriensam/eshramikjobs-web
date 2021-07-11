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

const ProfileCreation = ({ match }) => {
  const step = match.params.step;

  const [profileProps, setProfileProps] = useState({
    1: {
      name: "",
      gender: "male",
      dateOfBirth: moment().valueOf(),
      maritalStatus: "single",
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

  const getComponent = () => {
    switch (step) {
      case "1":
        return (
          <PersonalInformation
            info={profileProps[step]}
            onHandleProfileInfo={onHandleInfo}
            onHandleSetAddress={onHandleSetAddress}
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
        return <EmployeeDetails />;
      case "6":
        return <Overseas />;
      case "7":
        return <Upload />;
      case "8":
        return <Resume />;
      default:
        return <PersonalInformation />;
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

export default ProfileCreation;
