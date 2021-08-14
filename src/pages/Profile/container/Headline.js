import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Fragment } from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import TextArea from "../../../components/atoms/TextArea";
import Title from "../../../components/atoms/Title";
import Popup from "../../../components/molecules/Popup";

const Headline = forwardRef((props, ref) => {
  const [popup, setPopup] = useState(false);
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));

  const onClosePopup = () => setPopup(false);
  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <Title variant="psm-23-1">Resume headline</Title>
          <TextArea className="u-margin-top-30" />
          <div className="profile__popupCTA">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button content="Save" variant="1-4" />
          </div>
        </Popup>
      )}
      <Text variant="pl-14-1">Construction supervisor</Text>
    </Fragment>
  );
});

export default Headline;
