import * as Yup from 'yup';

import { VALIDATIONS } from '../../strings';

 export const newCandidateValidation = Yup.object({
  firstName: Yup.string().required(VALIDATIONS.required),
  lastName: Yup.string().required(VALIDATIONS.required),
  identification: Yup.string().required(VALIDATIONS.required),
  email: Yup.string()
    .email(VALIDATIONS.badEmail)
    .required(VALIDATIONS.required),
  githubUser: Yup.string().required(VALIDATIONS.required)
});

