import React from 'react';
import { useField, useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


function DatePicker({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <ReactDatePicker
      {...field}
      {...props}
      showYearDropdown
      showMonthDropdown
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val.toUTCString());
      }}
    />
  );
}

export default DatePicker;
