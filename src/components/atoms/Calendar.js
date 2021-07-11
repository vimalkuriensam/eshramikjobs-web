import React, { useState } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";
import Icon from "./Icon";

const Calendar = ({ value, onHandleDate }) => {
  const [startDate, setStartDate] = useState(
    value ? value : moment().valueOf()
  );

  const onSetDate = (date) => {
    setStartDate(moment(date).valueOf());
    onHandleDate({ target: { value: moment(date).valueOf() } });
  };
  return (
    <div className="form__calendar">
      <Icon name="Calendar" />
      <DatePicker
        selected={startDate}
        showYearDropdown
        dropdownMode="scroll"
        yearDropdownItemNumber={100}
        onChange={onSetDate}
      />
    </div>
  );
};

export default Calendar;
