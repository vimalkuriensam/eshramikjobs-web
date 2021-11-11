import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";

import Button from "../../../components/atoms/Button";
import Popup from "../../../components/molecules/Popup";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import FormDropdown from "../../../components/molecules/FormDropdown";
import FormRadioGroup from "../../../components/molecules/FormRadioGroup";

import {
  QUALIFICATION_SCHOOL,
  QUALIFICATION_SPECIALIZATION,
} from "../../Signup/childPages/ProfileCreation/data";

function QualificationContents({
  onHandleClose,
  info,
  updateInfo,
  boards,
  collegesList,
  institutionList,
  degreeList,
}) {
  const onHandleEditInfo = (type, { target }) => {
    const { value } = target;
    setEditInfo((prevState) => ({ ...prevState, [type]: value }));
  };
  const [editInfo, setEditInfo] = useState(info);
  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Add Qualification
      </Title>
      <div className="profile__popupMainContent">
        <div className="row">
          <FormRadioGroup
            title={QUALIFICATION_SCHOOL.title}
            column="5"
            value={editInfo.school}
            contents={QUALIFICATION_SCHOOL.contents}
            onHandleRadioClick={onHandleEditInfo.bind(this, "school")}
          />
        </div>
        <div className="row">
          <FormDropdown
            title="Board name"
            contents={boards}
            value={editInfo.board_name}
            onHandleDropdownValue={onHandleEditInfo.bind(this, "board_name")}
          />
        </div>
        <div className="row">
          <FormRadioGroup
            title={QUALIFICATION_SPECIALIZATION.title}
            value={editInfo.specialization}
            column="5"
            contents={QUALIFICATION_SPECIALIZATION.contents}
            onHandleRadioClick={onHandleEditInfo.bind(this, "specialization")}
          />
        </div>
        <div className="row">
          <FormDropdown
            title="College/University"
            contents={collegesList}
            value={info.college}
            onHandleDropdownValue={onHandleEditInfo.bind(this, "college")}
          />
        </div>
        <div className="row">
          <FormDropdown
            title="Degree"
            contents={degreeList}
            value={info.degree}
            onHandleDropdownValue={onHandleEditInfo.bind(this, "degree")}
          />
        </div>
        <div className="row">
          <FormDropdown
            title="Institution name"
            contents={institutionList}
            value={info.institution_name}
            onHandleDropdownValue={onHandleEditInfo.bind(
              this,
              "institution_name"
            )}
          />
        </div>
      </div>
      <div className="profile__popupCTA profile__popupVerticalPadding">
        <Button content="Cancel" onButtonClick={onHandleClose} variant="6" />
        <Button
          content="Save"
          variant="1-4"
          onButtonClick={async () => {
            const resp = await updateInfo(2, editInfo);
            if (resp) onHandleClose();
          }}
        />
      </div>
    </Fragment>
  );
}

const Qualification = forwardRef((props, ref) => {
  const [popup, setPopup] = useState(false);
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));

  const collegesList = props.colleges?.map((college) => college.name);
  const institutionList = props.institutions?.map(
    (institution) => institution.name
  );
  const degreeList = props.degrees?.map((degree) => degree.name);

  const onClosePopup = () => setPopup(false);



  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <QualificationContents
            info={props.info}
            collegesList={collegesList}
            institutionList={institutionList}
            degreeList={degreeList}
            updateInfo={props.updateInfo}
            boards={props.boards}
          />
        </Popup>
      )}
      <Text variant="pl-18-2" className="u-margin-top-30 u-display-block">
        Board
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {props.info.board_name}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {props.info.school}
      </Text>
      <Text variant="pl-14-1" className="u-margin-top-30 u-display-block">
        {props.info.institution_name}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {props.info.specialization}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {props.info.college}
      </Text>
    </Fragment>
  );
});

export default Qualification;
