import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  Fragment,
} from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import TextArea from "../../../components/atoms/TextArea";
import Title from "../../../components/atoms/Title";
import Popup from "../../../components/molecules/Popup";

function HeadlineContents({ onHandleClose, info, updateInfo }) {
  const onHandleEditInfo = (type, { target }) => {
    const { value } = target;
    setEditInfo((prevState) => ({ ...prevState, [type]: value }));
  };
  const [editInfo, setEditInfo] = useState(info);
  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Resume headline
      </Title>
      <div className="profile__popupMainContent">
        <TextArea
          className="u-margin-top-30"
          value={editInfo?.title}
          focused="true"
          onHandleText={onHandleEditInfo.bind(this, "title")}
        />
      </div>
      <div className="profile__popupCTA profile__popupVerticalPadding">
        <Button content="Cancel" onButtonClick={onHandleClose} variant="6" />
        <Button
          content="Save"
          onButtonClick={async () => {
            const resp = await updateInfo(5, { empDetails: [editInfo] });
            if (resp) onHandleClose();
          }}
          variant="1-4"
        />
      </div>
    </Fragment>
  );
}

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
          <HeadlineContents info={props.info} updateInfo={props.updateInfo} />
        </Popup>
      )}
      <Text variant="pl-14-1">{props?.info?.title}</Text>
    </Fragment>
  );
});

export default Headline;
