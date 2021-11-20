import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import FormRadioGroup from "../../../components/molecules/FormRadioGroup";
import Popup from "../../../components/molecules/Popup";

const OverseasContents = ({ info, updateInfo, onHandleClose }) => {
  const [editInfo, setEditInfo] = useState(info[0]);

  const onEditOverseas = ({ target }, type) => {
    const { value } = target;
    setEditInfo((prevState) => ({
      ...prevState,
      [type]: value == "yes" ? 1 : 0,
    }));
  };

  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Overseas Opportunity
      </Title>
      <div className="profile__popupMainContent">
        <div className="u-margin-top-20">
          <FormRadioGroup
            title="Are you interested in overseas opportunity"
            value={editInfo.overseas ? "yes" : "no"}
            onHandleRadioClick={(e) => onEditOverseas(e, "overseas")}
            contents={[
              { id: "yes", title: "Yes", name: "opportunity" },
              { id: "no", title: "No", name: "opportunity" },
            ]}
          />
        </div>
        <div className="u-margin-top-30">
          <FormRadioGroup
            title="Do you have a valid Indian passport"
            value={editInfo.validPassport ? "yes" : "no"}
            onHandleRadioClick={(e) => onEditOverseas(e, "validPassport")}
            contents={[
              { id: "yes", title: "Yes", name: "passport" },
              { id: "no", title: "No", name: "passport" },
            ]}
          />
        </div>
      </div>
      <div className="profile__popupCTA profile__popupVerticalPadding">
        <Button content="Cancel" onButtonClick={onHandleClose} variant="6" />
        <Button
          content="Save"
          variant="1-4"
          onButtonClick={async () => {
            const resp = await updateInfo(6, editInfo);
            if (resp) onHandleClose();
          }}
        />
      </div>
    </Fragment>
  );
};

// Main Function
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
          <OverseasContents info={props.info} updateInfo={props.updateInfo} />
        </Popup>
      )}
      <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
        {props.info[0]?.overseas ? "Yes" : "No"}
      </Text>
    </Fragment>
  );
});

export default Overseas;
