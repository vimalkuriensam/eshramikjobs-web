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
import RadioGroup from "../../../components/molecules/RadioGroup";

const Qualification = forwardRef((props, ref) => {
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
          <Title variant="psm-23-1">Add Qualification</Title>
          <div className="row">
            <FormRadioGroup
              title="School"
              column="5"
              contents={[
                { id: "na", title: "NA", name: "school" },
                { id: "5thgrade", title: "5th grade", name: "school" },
                { id: "8thgrade", title: "8th grade", name: "school" },
                { id: "high", title: "High school", name: "school" },
                { id: "senior", title: "Senior secondary", name: "school" },
              ]}
            />
          </div>
          <div className="row">
            <FormDropdown title="Board name" />
          </div>
          <div className="row">
            <FormRadioGroup
              title="Specialization/field of study"
              column="5"
              contents={[
                { id: "iti", title: "ITI", name: "specialization" },
                {
                  id: "certification",
                  title: "Certification",
                  name: "specialization",
                },
                { id: "technical", title: "Technical", name: "specialization" },
                { id: "diploma", title: "Diploma", name: "specialization" },
                { id: "others", title: "Others", name: "specialization" },
              ]}
            />
          </div>
          <div className="row">
            <FormDropdown title="College/University" />
          </div>
          <div className="row">
            <FormDropdown title="Degree" />
          </div>
          <div className="row">
            <FormDropdown title="Institution name" />
          </div>
          <div className="row">
            <RadioGroup
              column="5"
              contents={[
                { id: "partime", title: "Part time", name: "timing" },
                { id: "fulltime", title: "Full time", name: "timing" },
                { id: "distance", title: "Distance learning", name: "timing" },
              ]}
            />
          </div>
          <div className="profile__popupCTA">
            <Button content="Cancel" onButtonClick={onClosePopup} variant="6" />
            <Button content="Save" variant="1-4" />
          </div>
        </Popup>
      )}
      <Text variant="pl-18-2" className="u-margin-top-30 u-display-block">
        Board
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        Maharashtra
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        2009
      </Text>
      <Text variant="pl-14-1" className="u-margin-top-30 u-display-block">
        Pune University
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        Diploma in civil engineering
      </Text>
      <Text variant="pl-14-1" className="u-display-block">
        MIT college of engineering
      </Text>
    </Fragment>
  );
});

export default Qualification;
