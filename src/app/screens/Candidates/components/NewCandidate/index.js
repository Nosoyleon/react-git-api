import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from 'app/components/FormInput';
import { useCookies } from 'react-cookie';

import { BUTTONS } from '../../strings';
import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';
import { newCandidateValidation } from './validations';

function NewCandidate() {
  const [cookies, setCookie] = useCookies(['candidates']);
  const initialDate = new Date();
  initialDate.setFullYear(initialDate.getFullYear() - 18);

  return (
    <div>
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const candidateList = cookies.candidates || [];
            candidateList.push(values)
            setCookie('candidates',  candidateList );
  
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.candidateForm}>
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
                <button type="button" className="button is-link is-light">
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
