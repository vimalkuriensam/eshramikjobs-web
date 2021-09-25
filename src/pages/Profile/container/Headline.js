import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
  const [info, setInfo] = useState(props.info);
  const [editInfo, setEditInfo] = useState(props.info);
  const onClosePopup = () => setPopup(false);
  
  const onHandleEditInfo = (type, { target }) => {
    const { value } = target;
    setEditInfo((prevState) => ({ ...prevState, [type]: value }));
  };

  useEffect(() => {
    if (info != props.info) {
      setInfo(props.info);
      onClosePopup();
    }
  }, [props.info]);

  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <Title variant="psm-23-1">Resume headline</Title>
          <TextArea
            className="u-margin-top-30"
            value={editInfo?.title || ""}
            focused="true"
            onHandleText={onHandleEditInfo.bind(this, "title")}
          />
          <div className="profile__popupCTA">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button
              content="Save"
              onButtonClick={props.updateInfo.bind(this, 5, editInfo)}
              variant="1-4"
            />
          </div>
        </Popup>
      )}
      <Text variant="pl-14-1">{info?.title}</Text>
    </Fragment>
  );
});

export default Headline;
