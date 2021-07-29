import React from "react";
import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";
import Text from "../../../../../components/atoms/Text";

const Details = () => {
  return (
    <div className="authentication__adminDetails">
      <Image name="hexagon" className="authentication__hexagon1" />
      <Image name="hexagon" className="authentication__hexagon2" />
      <Image name="Logo" className="authentication__adminLogo" />
      <div className="authentication__adminLoginBox">
        <Title className="u-margin-top-10" variant="pr-25-1">
          Login
        </Title>
        <div className="authentication__adminInput">
          <Input
            variant="1"
            className="u-margin-top-2"
            placeholder="Email Id"
          />
          <Input
            variant="1"
            className="u-margin-top-2"
            placeholder="Password"
            type="password"
          />
          <div className="authentication__adminCTA">
            <span><Text variant="pr-14-2">forgot password</Text></span>
            <span><Text variant="pr-14-2">Sign up</Text></span>            
          </div>
          <Button variant="1-3" className="u-margin-top-2" content="Login" />
        </div>
      </div>
    </div>
  );
};

export default Details;
