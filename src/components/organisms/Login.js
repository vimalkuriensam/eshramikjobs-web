import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import validator from "validator";

import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Popup from "../molecules/Popup";
import Text from "../atoms/Text";

import { loginState } from "../../redux/actions/utils.action";
import { INVALID_EMAIL } from "../../utils/data";
import history from "../../utils/history";
import { setLogin } from "../../redux/actions/authentication.action";

const Login = ({ isLogin, dispatch }) => {
  const onSetLogin = () => dispatch(loginState({ state: false }));

  const onSetSignup = () => {
    history.push("/register");
    onSetLogin();
  };

  const onSetEmail = ({ target }) => {
    const { value } = target;
    setError("");
    setEmail(value);
  };

  const onSubmitEmail = () => {
    const isEmail = validator.isEmail(email);
    if (isEmail) {
      dispatch(setLogin({ email }))
    } else setError(INVALID_EMAIL);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  return (
    <Fragment>
      {isLogin ? (
        <Popup
          onClosePopup={onSetLogin}
          transition={{ horizontal: "top", vertical: null }}
        >
          <div className="authentication__loginContainer">
            <div
              className={`authentication__loginEmailContainer ${
                error ? "authentication__loginInputError" : null
              }`}
            >
              <Input
                onHandleText={onSetEmail}
                value={email}
                placeholder="Email"
                variant="2"
              />
              {error && (
                <Text className="authentication__loginError" variant="error">
                  {error}
                </Text>
              )}
            </div>
            {/*<Input
              placeholder="Password"
              className="u-margin-top-50"
              type="password"
              variant="2"
            />*/}
            <div className="authentication__loginCTA">
              {/*<span>
                <Text variant="pr-18-2">forgot password?</Text>
              </span>*/}
              <span onClick={onSetSignup}>
                <Text variant="pr-18-2">Sign up</Text>
              </span>
            </div>
            <Button
              onButtonClick={onSubmitEmail}
              content="login"
              variant="1-4"
              className="u-margin-top-4"
            />
          </div>
        </Popup>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.utils.loginState,
});

export default connect(mapStateToProps)(Login);
