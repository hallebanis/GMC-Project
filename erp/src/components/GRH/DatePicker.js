import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Select = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};