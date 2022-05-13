import React from "react";
import Image from "../../../components/atoms/Image";
import Progress from "../../../components/atoms/Progress";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const Main = ({ info, basic }) => {
  return (
    <div className="profile__main">
      <div className="profile__main--left">
        <div className="profile__octo">
          <div className="profile__octo1">
            <Image
              className="profile__image"
              type={basic.url ? "binary" : "png"}
              name={basic.url ? basic.url: "no-image-placeholder"}
            />
          </div>
        </div>
      </div>
      <div className="profile__main--right">
        <div className="row">
          <div className="col-1-of-2">
            <div>
              <Title variant="pr-17-2">{info.full_name}</Title>
            </div>
            <div>
              <Text variant="pl-14-2">{basic.title}</Text>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                {info.per_district
                  ? info.per_district + ", " + info.per_state
                  : info.district + " " + info.state}{" "}
                India
              </Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                04 years
              </Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                INR 4 lakh 50 thousand
              </Title>
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Title variant="pr-17-2">
                {info.per_house_no
                  ? info.per_house_no +
                    ", " +
                    info.per_street_locality +
                    ", " +
                    info.per_region
                  : info.house_no +
                    ", " +
                    info.street_locality +
                    ", " +
                    info.region}
              </Title>
            </div>
            <div>
              <Title variant="pr-17-2">{info.per_pin || info.pin}</Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-65">
                {info.mobile || "Phone not available"}
              </Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                {info.email}
              </Title>
            </div>
          </div>
        </div>
        <Progress value={basic.progress} className="profile__progress" />
      </div>
    </div>
  );
};

export default Main;
