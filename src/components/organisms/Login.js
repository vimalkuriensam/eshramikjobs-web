import React from "react";

import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Popup from "../molecules/Popup";
import Text from "../atoms/Text";

const Login = () => {
  return (
    <Popup transition={{ horizontal: "top", vertical: null }}>
      <div className="authentication__loginContainer">
        <Input placeholder="Email" variant="2" />
        <Input
          placeholder="Password"
          className="u-margin-top-5"
          type="password"
          variant="2"
        />
        <div className="authentication__loginCTA">
          <span>
            <Text variant="pr-18-2">forgot password?</Text>
          </span>
          <span onClick={() => console.log("clicked")}>
            <Text variant="pr-18-2">Sign up</Text>
          </span>
        </div>
        <Button content="login" variant="1-4" className="u-margin-top-4" />
      </div>
    </Popup>
  );
};

export default Login;
