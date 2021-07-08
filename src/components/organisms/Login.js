import React from "react";

import Input from "../atoms/Input";
import Popup from "../molecules/Popup";

const Login = () => {
  return (
    <Popup>
      <div>
        <Input placeholder="Email" />
      </div>
    </Popup>
  );
};

export default Login;
