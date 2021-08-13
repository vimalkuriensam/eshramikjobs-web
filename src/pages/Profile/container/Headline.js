import React, { forwardRef, useImperativeHandle } from "react";
import Text from "../../../components/atoms/Text";

const Headline = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      alert("Child function called headline");
    },
  }));
  return <Text variant="pl-14-1">Construction supervisor</Text>;
});

export default Headline;
