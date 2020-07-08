import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormInput from 'app/components/FormInput';
import { useCookies } from 'react-cookie';
import cn from 'classnames';

import { BUTTONS } from '../../strings';
import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';
import { newCandidateValidation } from './validations';

function NewCandidate() {
  const [cookies, setCookie] = useCookies(['candidates']);
  const [isOpen, setIsOpen] = useState(false);
  const initialDate = new Date();
  initialDate.setFullYear(initialDate.getFullYear() - 18);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const candidateList = cookies.candidates || [];
      candidateList.push(values);
      setCookie('candidates', candidateList);

      setSubmitting(false);
      resetForm();
      setIsOpen(false);
    }, 400);
  };

  return (
    <div className="mb-5">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-primary', {
            [styles.addButton]: true,
            [styles.hideButton]: isOpen
          })}
          onClick={() => setIsOpen(true)}
        >
          {BUTTONS.addCandidate}
        </button>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          identification: '',
          birthdate: initialDate,
          email: '',
          githubUser: ''
        }}
        validationSchema={newCandidateValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className={cn(styles.candidateForm, {
              [styles.hideForm]: !isOpen
            })}
          >
            {FORM_FIELDS.map(({ name, type, label }) => (
              <FormInput key={name} label={label} name={name} type={type} />
            ))}
            <div className="field is-grouped">
              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={isSubmitting}
                >
                  {BUTTONS.save}
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-link is-light"
                  onClick={() => setIsOpen(false)}
                >
                  {BUTTONS.cancel}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewCandidate;
