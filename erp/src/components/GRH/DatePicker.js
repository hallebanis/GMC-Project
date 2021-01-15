import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Select = ({ onDateChange , value}) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setStartDate(e);
    onDateChange(e);
  };
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={value || startDate}
      onChange={handleChange}
    />
  );
};
