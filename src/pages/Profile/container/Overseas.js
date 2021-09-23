import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import FormRadioGroup from "../../../components/molecules/FormRadioGroup";
import Popup from "../../../components/molecules/Popup";

const Overseas = forwardRef((props, ref) => {
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
          <Title variant="psm-23-1">Overseas Opportunity</Title>
          <div className="u-margin-top-20">
            <FormRadioGroup
              title="Are you interested in overseas opportunity"
              contents={[
                { id: "yes", title: "Yes", name: "opportunity" },
                { id: "no", title: "No", name: "opportunity" },
              ]}
            />
          </div>
          <div className="u-margin-top-30">
            <FormRadioGroup
              title="Do you have a valid Indian passport"
              contents={[
                { id: "yes", title: "Yes", name: "passport" },
                { id: "no", title: "No", name: "passport" },
              ]}
            />
          </div>
          <div className="profile__popupCTA">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button content="Save" variant="1-4" />
          </div>
        </Popup>
      )}
      <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
        No
      </Text>
    </Fragment>
  );
});

export default Overseas;
