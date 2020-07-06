import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInput from '../../../../components/FormInput';
import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

function NewCandidate() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          identification: '',
          birthdate: '',
          email: '',
          githubUser: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          identification: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          githubUser: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.candidateForm}>
            {
              FORM_FIELDS.map(({ name, type, label }) => <FormInput key={name} label={label} name={name} type={type} />)
            }
            <div className="field is-grouped">
              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={isSubmitting}
                >
                  Guardar
                </button>
              </div>
              <div className="control">
                <button type="button" className="button is-link is-light">
                  Cancelar
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
