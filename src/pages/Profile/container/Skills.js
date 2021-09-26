import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";
import Button from "../../../components/atoms/Button";
import TextArea from "../../../components/atoms/TextArea";
import Title from "../../../components/atoms/Title";
import Popup from "../../../components/molecules/Popup";

const Skills = forwardRef((props, ref) => {
  const [popup, setPopup] = useState(false);
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));
  const { skill_list } = props.info;
  const [editInfo, setEditInfo] = useState({
    ...props.info,
  });
  const onHandleEditInfo = (type, { target }) => {
    const { value } = target;
    setEditInfo((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };
  const onClosePopup = () => setPopup(false);

  const onHandleSave = () => {
    const editCopy = {
      ...editInfo,
      skill_list: editInfo.skill_list.split(/[\s,]+/).filter((val) => !!val),
    };
    props.updateInfo(4, editCopy)
  };
  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <Title variant="psm-23-1" className="profile__popupVerticalPadding">Skills</Title>
          <div className="profile__popupMainContent">
            <TextArea
              className="u-margin-top-30"
              value={editInfo.skill_list}
              onHandleText={onHandleEditInfo.bind(this, "skill_list")}
            />
          </div>
          <div className="profile__popupCTA profile__popupVerticalPadding">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button content="Save" variant="1-4" onButtonClick={onHandleSave} />
          </div>
        </Popup>
      )}
      <div className="recruit__skills">
        {skill_list?.map((skill, index) => (
          <span key={index} className="form__textarea--textgroup">
            <Title variant="pr-19-3">{skill}</Title>
          </span>
        ))}
      </div>
    </Fragment>
  );
});

export default Skills;
