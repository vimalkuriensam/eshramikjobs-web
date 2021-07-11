import React, { useState } from "react";

import Button from "../../../components/atoms/Button";
import Checkbox from "../../../components/atoms/Checkbox";
import Input from "../../../components/atoms/Input";
import Text from "../../../components/atoms/Text";
import validator from "validator";
import { SIGNUP_DEFAULT_PROPS, SIGNUP_ERRORS } from "../data";

const Details = () => {
  const [signupProps, setSignupProps] = useState(SIGNUP_DEFAULT_PROPS);
  const [signupError, setSignupError] = useState(SIGNUP_DEFAULT_PROPS);
  const [isError, setIsError] = useState(false);
  const [isItem, setIsItem] = useState(false);
  const [signupPolicy, setSignupPolicy] = useState(false);

  const onHandleSignup = (type, key, { target }) => {
    setIsError(false);
    setIsItem(false);
    const { value } = target;
    switch (type) {
      case "number":
        if (!validator.isNumeric(value))
          setSignupError((prevState) => ({
            ...prevState,
            [key]: SIGNUP_ERRORS.mobile,
          }));
        else setSignupError((prevState) => ({ ...prevState, [key]: "" }));
        break;
      case "email":
        if (!validator.isEmail(value))
          setSignupError((prevState) => ({
            ...prevState,
            [key]: SIGNUP_ERRORS.email,
          }));
        else setSignupError((prevState) => ({ ...prevState, [key]: "" }));
        break;
      case "text":
        if (!validator.isAlpha(value))
          setSignupError((prevState) => ({
            ...prevState,
            [key]: SIGNUP_ERRORS.name,
          }));
        else setSignupError((prevState) => ({ ...prevState, [key]: "" }));
        break;
    }
    setSignupProps((prevState) => ({ ...prevState, [key]: value }));
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    const errorMatch = Object.values(signupError).some((error) => !!error);
    const itemMatch = Object.values(signupProps).every((val) => !!val);
    console.log(errorMatch, itemMatch);
    if (errorMatch) setIsError(true);
    else if (!itemMatch) setIsItem(true);
    else {
      console.log(signupProps)
    }
  };

  const onSetSignupPolicy = ({ target }) => setSignupPolicy(target.value);

  return (
    <div className="authentication__signupInputContainer">
      <form onSubmit={onSubmitSignup}>
        <div className="authentication__signupInput">
          <div
            className={`authentication__loginEmailContainer ${
              (isError && signupError.name) || isItem
                ? "authentication__loginInputError"
                : null
            }`}
          >
            <Input
              onHandleText={onHandleSignup.bind(this, "text", "name")}
              value={signupProps.name}
              variant="1"
              placeholder="Name"
            />
            {isError && signupError.name && (
              <Text className="authentication__loginError" variant="error">
                {signupError.name}
              </Text>
            )}
          </div>
          <div
            className={`authentication__loginEmailContainer ${
              (isError && signupError.email) || isItem
                ? "authentication__loginInputError"
                : null
            }`}
          >
            <Input
              onHandleText={onHandleSignup.bind(this, "email", "email")}
              value={signupProps.email}
              variant="1"
              placeholder="Email Id"
            />
            {isError && signupError.email && (
              <Text className="authentication__loginError" variant="error">
                {signupError.email}
              </Text>
            )}
          </div>
          <div
            className={`authentication__loginEmailContainer ${
              (isError && signupError.mobile) || isItem
                ? "authentication__loginInputError"
                : null
            }`}
          >
            <Input
              onHandleText={onHandleSignup.bind(this, "number", "mobile")}
              value={signupProps.mobile}
              variant="1"
              placeholder="Mobile Number"
            />
            {isError && signupError.mobile && (
              <Text className="authentication__loginError" variant="error">
                {signupError.mobile}
              </Text>
            )}
          </div>
        </div>
        <Checkbox
          value={signupPolicy}
          id="signupPolicy"
          checkBoxInput={onSetSignupPolicy}
          variant="2"
          className="u-margin-top-30"
        >
          <Text>
            <Text variant="pr-14-1">By signing up, you agree to our</Text>
            <Text variant="pr-14-2" className="u-margin-left-5">
              Terms of use
            </Text>
            <Text variant="pr-14-1" className="u-margin-left-5">
              and
            </Text>
            <Text variant="pr-14-2" className="u-margin-left-5">
              Privacy policies
            </Text>
            <Text variant="pr-14-1" className="u-margin-left-5">
              .
            </Text>
          </Text>
        </Checkbox>
        <Button
          content="Signup"
          disabled={!signupPolicy}
          type="submit"
          className="authentication__signupCTA"
          variant="1-4"
        />
      </form>
    </div>
  );
};

export default Details;
