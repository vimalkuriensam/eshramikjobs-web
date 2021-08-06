import React from "react";
import Button from "../../../components/atoms/Button";
import Image from "../../../components/atoms/Image";
import Progress from "../../../components/atoms/Progress";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import history from "../../../utils/history";

const Profile = () => {
  const onHandleUpdateProfile = () => history.push("/profile");
  return (
    <div className="home__profileContainer">
      <div className="home__imageContainer">
        <div className="octo">
          <div className="octo1">
            <Image className="home__image" name="user-image" />
          </div>
        </div>
      </div>
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
        <div className="home__listContainer u-margin-right-5">
          <Title variant="pr-13-1">Search appearances</Title>
        </div>
        <div className="home__listContainer u-margin-left-5">
          <Title variant="pr-13-1">Recruiters Actions</Title>
        </div>
      </div>
      <Button
        className="u-margin-top-40"
        variant="1-3"
        content="Update profile"
        onButtonClick={onHandleUpdateProfile}
      />
    </div>
  );
};

export default Profile;
