import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";
import {} from "react";
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

  const onClosePopup = () => setPopup(false);
  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <Title variant="psm-23-1">Skills</Title>
          <TextArea className="u-margin-top-30" />
          <div className="profile__popupCTA">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button content="Save" variant="1-4" />
          </div>
        </Popup>
      )}
      <div className="recruit__skills">
        {["Auto cad", "3Ds Max", "Catia", "Revit", "Project Management"].map(
          (skill, index) => (
            <span key={index} className="form__textarea--textgroup">
              <Title variant="pr-19-3">{skill}</Title>
            </span>
          )
        )}
      </div>
    </Fragment>
  );
});

export default Skills;
