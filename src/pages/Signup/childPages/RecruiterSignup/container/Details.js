import React, { useState } from "react";

import validator from "validator";

import Button from "../../../../../components/atoms/Button";
import Image from "../../../../../components/atoms/Image";
import Input from "../../../../../components/atoms/Input";
import Title from "../../../../../components/atoms/Title";
import { connect } from "react-redux";
import { funcMap } from "../../../../../utils/data";
import Text from "../../../../../components/atoms/Text";
import { recruiterRegister } from "../../../../../redux/actions/authentication.action";
import history from "../../../../../utils/history";

const Details = ({ dispatch }) => {
  const [registerProps, setRegisterProps] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const defaultErrorProps = {
    email: false,
    mobile: false,
    password: false,
  };

  const [error, setError] = useState({ ...defaultErrorProps });

  const onHandleLogin = (type, { target }) => {
    setError({ ...defaultErrorProps });
    const { value } = target;
    setRegisterProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const buttonStatus = () => {
    const { email, mobile } = registerProps;
    if (email && mobile) return false;
    return true;
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmail(registerProps.email))
      setError((prevState) => ({ ...prevState, email: true }));
    if (!validator.isNumeric(registerProps.mobile))
      setError((prevState) => ({ ...prevState, mobile: true }));
    if (registerProps.password !== registerProps.confirmPassword)
      setError((prevState) => ({ ...prevState, password: true }));
    if (
      validator.isEmail(registerProps.email) &&
      validator.isNumeric(registerProps.mobile) &&
      registerProps.password == registerProps.confirmPassword
    ) {
      const info = { ...registerProps };
      delete info.confirmPassword;
      const response = await dispatch(recruiterRegister(info));
      if (response) history.push("/register/signup/profile");
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
          Sign Up
        </Title>
        <form onSubmit={onHandleSubmit} className="authentication__adminInput">
          <div
            className={`authentication__loginEmailContainer ${
              error.email ? "authentication__loginInputError" : null
            }`}
          >
            <Input
              variant="1"
              className="u-margin-top-2"
              value={registerProps.email}
              onHandleText={onHandleLogin.bind(this, "email")}
              placeholder="Email Id"
            />
            {error.email && (
              <Text className="authentication__loginError2" variant="error">
                INVALID EMAIL
              </Text>
            )}
          </div>
          <div
            className={`authentication__loginEmailContainer ${
              error.mobile ? "authentication__loginInputError" : null
            }`}
          >
            <Input
              variant="1"
              className="u-margin-top-2"
              value={registerProps.mobile}
              onHandleText={onHandleLogin.bind(this, "mobile")}
              placeholder="Mobile"
            />
            {error.mobile && (
              <Text className="authentication__loginError2" variant="error">
                INVALID MOBILE FORMAT
              </Text>
            )}
          </div>
          <Input
            variant="1"
            className={`u-margin-top-2 ${
              error.password ? "authentication__loginInputError2" : null
            }`}
            value={registerProps.password}
            onHandleText={onHandleLogin.bind(this, "password")}
            placeholder="Password"
            type="password"
          />
          <div
            className={`authentication__loginEmailContainer ${
              error.password ? "authentication__loginInputError" : null
            }`}
          >
            <Input
              variant="1"
              className={`u-margin-top-2 ${
                error.password ? "authentication__loginInputError2" : null
              }`}
              value={registerProps.confirmPassword}
              onHandleText={onHandleLogin.bind(this, "confirmPassword")}
              placeholder="Retype Password"
              type="password"
            />
            {error.password && (
              <Text className="authentication__loginError2" variant="error">
                PASSWORD DO NOT MATCH
              </Text>
            )}
          </div>
          <Button
            disabled={buttonStatus()}
            variant="1-3"
            type="submit"
            className="u-margin-top-2"
            content="Signup"
          />
        </form>
      </div>
    </div>
  );
};

export default connect()(Details);
