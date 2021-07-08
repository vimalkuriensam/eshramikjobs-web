import React from "react";

import Button from "../../../components/atoms/Button";
import Checkbox from "../../../components/atoms/Checkbox";
import Input from "../../../components/atoms/Input";
import Text from "../../../components/atoms/Text";

const Details = () => {
  return (
    <div className="authentication__signupInputContainer">
      <form>
        <div className="authentication__signupInput">
          <Input variant="1" placeholder="Name" />
          <Input variant="1" placeholder="Email Id" />
          <Input variant="1" placeholder="Mobile Number" />
        </div>
        <Checkbox variant="2" className="u-margin-top-30">
          <Text>
            <Text variant="pr-14-1">By signing up, you agree to our</Text>
            <Text variant="pr-14-2" className="u-margin-left-5">Terms of use</Text>
            <Text variant="pr-14-1" className="u-margin-left-5">and</Text>
            <Text variant="pr-14-2" className="u-margin-left-5">Privacy policies</Text>
            <Text variant="pr-14-1" className="u-margin-left-5">.</Text>
          </Text>
        </Checkbox>
        <Button
          content="Signup"
          type="submit"
          className="authentication__signupCTA"
          variant="1-4"
        />
      </form>
    </div>
  );
};

export default Details;
