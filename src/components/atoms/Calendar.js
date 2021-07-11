import React, { useState } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";

const Calendar = () => {
  const [startDate, setStartDate] = useState(moment().valueOf());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Calendar;
