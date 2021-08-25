import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atoms/Button";
import Icon from "../../../components/atoms/Icon";
import Image from "../../../components/atoms/Image";
import Progress from "../../../components/atoms/Progress";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import history from "../../../utils/history";

const Profile = ({ details }) => {
  const { full_name, progress = 0, title, url } = details;
  const onHandleUpdateProfile = () => history.push("/user-profile");

  useEffect(()=>{}, [])
  return (
    <div className="home__profileContainer">
      <div className="home__imageContainer">
        <div className="octo">
          <div className="octo1">
            {url ? (
              <Image className="home__image" name={url} type="binary" />
            ) : (
              <div className="home__userIconContainer">
                <Icon className="home__userIcon" name="User" />
              </div>
            )}
          </div>
        </div>
      </div>
      {full_name && (
        <div>
          <Title variant="pr-17-1">{full_name}</Title>
        </div>
      )}
      {title && (
        <div>
          <Text variant="pl-14-1">{title}</Text>
        </div>
      )}
      <div className="home__progress">
        <Progress value={progress} />
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

const mapStateToProps = (state) => ({
  details: state.user.basic,
});

export default connect(mapStateToProps)(Profile);
