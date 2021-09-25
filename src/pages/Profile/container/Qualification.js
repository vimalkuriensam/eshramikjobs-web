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
import { connect } from "react-redux";

const Qualification = forwardRef((props, ref) => {
  const [popup, setPopup] = useState(false);
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));

  const [info, setInfo] = useState({ ...props.info });
  const [editInfo, setEditInfo] = useState({ ...props.info });
  const collegesList = props.colleges?.map((college) => college.name);
  const institutionList = props.institutions?.map(
    (institution) => institution.name
  );
  const degreeList = props.degrees?.map((degree) => degree.name);

  const onClosePopup = () => setPopup(false);

  const onEdit = ({ target }, type) => {
    const { value } = target;
    setEditInfo((prevState) => ({ ...prevState, [type]: value }));
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
            Add Qualification
          </Title>
          <div className="profile__popupMainContent">
            <div className="row">
              <FormRadioGroup
                title={QUALIFICATION_SCHOOL.title}
                column="5"
                value={editInfo.school}
                contents={QUALIFICATION_SCHOOL.contents}
                onHandleRadioClick={(e) => onEdit(e, "school")}
              />
            </div>
            <div className="row">
              <FormDropdown
                title="Board name"
                contents={props.boards}
                value={editInfo.board_name}
                onHandleDropdownValue={(e) => onEdit(e, "board_name")}
              />
            </div>
            <div className="row">
              <FormRadioGroup
                title={QUALIFICATION_SPECIALIZATION.title}
                value={editInfo.specialization}
                column="5"
                contents={QUALIFICATION_SPECIALIZATION.contents}
                onHandleRadioClick={(e) => onEdit(e, "specialization")}
              />
            </div>
            <div className="row">
              <FormDropdown
                title="College/University"
                contents={collegesList}
                value={info.college}
                onHandleDropdownValue={(e) => onEdit(e, "college")}
              />
            </div>
            <div className="row">
              <FormDropdown
                title="Degree"
                contents={degreeList}
                value={info.degree}
                onHandleDropdownValue={(e) => onEdit(e, "degree")}
              />
            </div>
            <div className="row">
              <FormDropdown
                title="Institution name"
                contents={institutionList}
                value={info.institution_name}
                onHandleDropdownValue={(e) => onEdit(e, "institution_name")}
              />
            </div>
            {/*<div className="row">
              <RadioGroup
                column="5"
                contents={[
                  { id: "partime", title: "Part time", name: "timing" },
                  { id: "fulltime", title: "Full time", name: "timing" },
                  {
                    id: "distance",
                    title: "Distance learning",
                    name: "timing",
                  },
                ]}
              />
              </div>*/}
          </div>
          <div className="profile__popupCTA profile__popupVerticalPadding">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button
              content="Save"
              variant="1-4"
              onButtonClick={props.updateInfo.bind(this, 2, editInfo)}
            />
          </div>
        </Popup>
      )}
      <Text variant="pl-18-2" className="u-margin-top-30 u-display-block">
        Board
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {info.board_name}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {info.school}
      </Text>
      <Text variant="pl-14-1" className="u-margin-top-30 u-display-block">
        {info.institution_name}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {info.specialization}
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        {info.college}
      </Text>
    </Fragment>
  );
});

// const mapStateToProps = (state) => ({
//   colleges: state.profile.colleges,
//   degrees: state.profile.degrees,
//   institutions: state.profile.institutionName,
//   boards: state.profile.boardName,
// });

export default Qualification;
