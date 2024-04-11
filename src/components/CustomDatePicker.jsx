import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CustomDatePicker({
  label = "",
  dateValue,
  onChangeDate,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker label={label} value={dateValue} onChange={onChangeDate} />
    </LocalizationProvider>
  );
}
