import React from "react";
import Calendar from "../atoms/Calendar";

import Title from "../atoms/Title";

const FormCalendar = ({ title, ...rest }) => {
  return (
    <div className="form__inputGroup">
      <Title
        variant="pr-16-1"
        className="form__calendarGroup--text u-margin-bottom-10"
      >
        {title}
      </Title>
      <Calendar {...rest} />
    </div>
  );
};

export default FormCalendar;
