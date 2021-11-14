import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useState,
} from "react";

import moment from "moment";

import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import TextArea from "../../../components/atoms/TextArea";
import Title from "../../../components/atoms/Title";
import FormCalendar from "../../../components/molecules/FormCalendar";
import FormDropdown from "../../../components/molecules/FormDropdown";
import FormInput from "../../../components/molecules/FormInput";
import Popup from "../../../components/molecules/Popup";

function EmploymentPopupContent({ info, onHandleClose }) {
  const [editInfo, setEditInfo] = useState([...info]);

  console.log(info);

  const onHandleEditInfo = (type, idx, { target }) => {
    const { value } = target;
    setEditInfo((prevState) =>
      prevState.map((val, index) => {
        if (index == idx) val[type] = value;
        return val;
      })
    );
  };

  return (
    <Fragment>
      <Title variant="psm-23-1" className="profile__popupVerticalPadding">
        Employment Details
      </Title>
      <div className="profile__popupMainContent">
        {editInfo.map((val, idx) => (
          <div key={idx}>
            <FormInput
              title="Name of Organization/Company"
              variant="1"
              placeholder=""
              value={val.name}
            />
            <div className="row u-margin-top-30">
              <div className="col-1-of-2">
                <FormCalendar
                  title="Start Date"
                  value={moment(val.start_date).valueOf()}
                  onHandleCalendar={onHandleEditInfo.bind(
                    this,
                    "start_date",
                    idx
                  )}
                />
              </div>
              <div className="col-1-of-2">
                <FormCalendar
                  title="End Date"
                  value={moment(val.end_date).valueOf()}
                  onHandleCalendar={onHandleEditInfo.bind(
                    this,
                    "end_date",
                    idx
                  )}
                />
              </div>
            </div>
            <FormDropdown
              title="Job Title"
              className="u-margin-top-30"
              placeholder=""
              value={val.title}
            />
            <FormDropdown
              title="Job location"
              className="u-margin-top-30"
              placeholder="city"
              value={val.location_city}
            />
            <FormDropdown
              title=""
              className="u-margin-top-30"
              placeholder="state"
              value={val.location_state}
            />
            <FormInput
              title="Last drawn salary"
              className="u-margin-top-30"
              variant="1"
              placeholder=""
            />
            <Title variant="pr-16-1" className="u-margin-top-30">
              Job description
            </Title>
            <TextArea value={val.job_description} />
          </div>
        ))}
      </div>
      <div className="profile__popupCTA  profile__popupVerticalPadding">
        <Button content="Cancel" onButtonClick={onHandleClose} variant="6" />
        <Button content="Save" variant="1-4" />
      </div>
    </Fragment>
  );
}

const EmployementDetails = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onHandleEdit() {
      setPopup(true);
    },
  }));
  const [popup, setPopup] = useState(false);
  const onClosePopup = () => setPopup(false);
  return (
    <Fragment>
      {popup && (
        <Popup
          onClosePopup={onClosePopup}
          className="profile__popupContainer"
          transition={{ horizontal: "top", vertical: null }}
        >
          <EmploymentPopupContent info={props.info} />
        </Popup>
      )}
      {props.info.map((val, index) => (
        <div key={index}>
          <Text variant="pl-16-1" className="u-margin-top-20 u-display-block">
            {val.title}
          </Text>
          <div className="u-space-between">
            <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
              {val.name}
            </Text>
            <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
              {val.start_date} - {val.end_date}
            </Text>
          </div>
          <Text variant="pl-16-1" className="u-margin-top-10 u-display-block">
            {val.job_description}
          </Text>
        </div>
      ))}
    </Fragment>
  );
});

export default EmployementDetails;
