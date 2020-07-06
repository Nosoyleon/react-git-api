import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { string } from 'prop-types';

function FormInput({ label, type, name }){
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <Field className="input" type={type} name={name} />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="help is-danger"
     />
    </div>
  )
}

FormInput.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  name: string.isRequired
}

export default FormInput;
