import React, { forwardRef, useImperativeHandle } from "react";
import Text from "../../../components/atoms/Text";

const Overseas = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      alert("Child function called overseas");
    },
  }));
  return (
    <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
      No
    </Text>
  );
});

export default Overseas;
