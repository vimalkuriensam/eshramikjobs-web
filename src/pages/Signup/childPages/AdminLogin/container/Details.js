import React, { useState } from "react";

import validator from "validator";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";
import Text from "../../../../../components/atoms/Text";
import { connect } from "react-redux";
import { adminLogin } from "../../../../../redux/actions/authentication.action";
import { funcMap } from "../../../../../utils/data";

const Details = ({ dispatch }) => {
  const [loginProps, setLoginProps] = useState({
    un: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);

  const onHandleLogin = (type, { target }) => {
    setEmailError(false);
    const { value } = target;
    setLoginProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const buttonStatus = () => {
    const { un, password } = loginProps;
    if (un && password) return false;
    return true;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(loginProps.un)) setEmailError(true);
    else {
      const info = { ...loginProps };
      dispatch(adminLogin({ info }));
    }
  };

  const onSetRoute = (route) => funcMap[route]();

  return (
    <div className="authentication__adminDetails">
      <Image name="hexagon" className="authentication__hexagon1" />
      <Image name="hexagon" className="authentication__hexagon2" />
      <Image
        name="Logo"
        onIconClick={onSetRoute.bind(this, "home")}
        className="authentication__adminLogo"
      />
      <div className="authentication__adminLoginBox">
        <Title className="u-margin-top-10" variant="pr-25-1">
          Login
        </Title>
        <form onSubmit={onHandleSubmit} className="authentication__adminInput">
          <Input
            variant="1"
            className={`u-margin-top-2 ${
              emailError ? "authentication__loginInputError2" : null
            }`}
            value={loginProps.un}
            onHandleText={onHandleLogin.bind(this, "un")}
            placeholder="Email Id"
          />
          <Input
            variant="1"
            className="u-margin-top-2"
            value={loginProps.password}
            onHandleText={onHandleLogin.bind(this, "password")}
            placeholder="Password"
            type="password"
          />
          <div className="authentication__adminCTA">
            <span>
              <Text variant="pr-14-2">forgot password</Text>
            </span>
            <span onClick={onSetRoute.bind(this, "recruiterSignup")}>
              <Text variant="pr-14-2">Sign up</Text>
            </span>
          </div>
          <Button
            disabled={buttonStatus()}
            variant="1-3"
            type="submit"
            className="u-margin-top-2"
            content="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default connect()(Details);
