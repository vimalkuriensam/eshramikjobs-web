import React from "react";
import Image from "../../../components/atoms/Image";
import Progress from "../../../components/atoms/Progress";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const Main = () => {
  return (
    <div className="profile__main">
      <div className="profile__main--left">
        <div className="profile__octo">
          <div className="profile__octo1">
            <Image className="profile__image" name="user-image" />
          </div>
        </div>
      </div>
      <div className="profile__main--right">
        <div className="row">
          <div className="col-1-of-2">
            <div>
              <Title variant="pr-17-2">Jhon dohe</Title>
            </div>
            <div>
              <Text variant="pl-14-2">Construction supervisor</Text>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                Pune, Maharashtra India
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
              <Title variant="pr-17-2">House no. 21, Magarpatta road</Title>
            </div>
            <div>
              <Title variant="pr-17-2">112054</Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-65">
                8755475757
              </Title>
            </div>
            <div>
              <Title variant="pr-17-2" className="u-margin-top-20">
                Jhondohe52@gmail.com
              </Title>
            </div>
          </div>
        </div>
        <Progress value="92" className="profile__progress" />
      </div>
    </div>
  );
};

export default Main;
