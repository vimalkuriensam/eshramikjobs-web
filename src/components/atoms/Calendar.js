import React, { useState } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";
import Icon from "./Icon";

const Calendar = () => {
  const [startDate, setStartDate] = useState(moment().valueOf());
  return (
    <div className="form__calendar">
      <Icon name="Calendar" />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calendar;
