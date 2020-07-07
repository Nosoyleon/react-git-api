import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { string } from 'prop-types';
import DatePicker from '../DatePicker';

function FormInput({ label, type, name }) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        {type === 'date' ? (
          <DatePicker className="input" name={name} />
        ) : (
          <Field className="input" type={type} name={name} />
        )}
      </div>
      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  );
}

FormInput.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  name: string.isRequired
};

export default FormInput;
