import React from "react";
import Button from "../../../components/atoms/Button";
import Image from "../../../components/atoms/Image";
import Progress from "../../../components/atoms/Progress";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const Profile = () => {
  return (
    <div className="home__profileContainer">
      <div>
        <Title variant="pr-17-1">Jhon dohe</Title>
      </div>
      <div>
        <Text variant="pl-14-1">Construction supervisor</Text>
      </div>
      <div className="home__progress">
        <Progress value="92" />
      </div>
      <div className="home__lists">
        <div className="home__listContainer u-margin-right-5"></div>
        <div className="home__listContainer u-margin-left-5"></div>
      </div>
      <Button
        className="u-margin-top-50"
        variant="1-3"
        content="Update profile"
      />
    </div>
  );
};

export default Profile;
