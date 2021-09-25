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
  const [info, setInfo] = useState(props.info[0]);
  const [editInfo, setEditInfo] = useState(props.info[0]);

  const onEditOverseas = ({ target }, type) => {
    const { value } = target;
    setEditInfo((prevState) => ({
      ...prevState,
      [type]: value == "yes" ? 1 : 0,
    }));
  };

  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <Title variant="psm-23-1" className="profile__popupVerticalPadding">
            Overseas Opportunity
          </Title>
          <div className="profile__popupMainContent">
            <div className="u-margin-top-20">
              <FormRadioGroup
                title="Are you interested in overseas opportunity"
                value={editInfo.int_overseas_opp ? "yes" : "no"}
                onHandleRadioClick={(e) =>
                  onEditOverseas(e, "int_overseas_opp")
                }
                contents={[
                  { id: "yes", title: "Yes", name: "opportunity" },
                  { id: "no", title: "No", name: "opportunity" },
                ]}
              />
            </div>
            <div className="u-margin-top-30">
              <FormRadioGroup
                title="Do you have a valid Indian passport"
                value={editInfo.valid_passport ? "yes" : "no"}
                onHandleRadioClick={(e) => onEditOverseas(e, "valid_passport")}
                contents={[
                  { id: "yes", title: "Yes", name: "passport" },
                  { id: "no", title: "No", name: "passport" },
                ]}
              />
            </div>
          </div>
          <div className="profile__popupCTA profile__popupVerticalPadding">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button
              content="Save"
              variant="1-4"
              onButtonClick={props.updateInfo.bind(this, 6, editInfo)}
            />
          </div>
        </Popup>
      )}
      <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
        {info.int_overseas_opp ? "Yes" : "No"}
      </Text>
    </Fragment>
  );
});

export default Overseas;
