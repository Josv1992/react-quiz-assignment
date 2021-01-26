import React from 'react';
import './Welcome.css';

import { FormValidation } from '../../services/FormValidation';
import { nameValidator } from '../../services/nameValidator';


export const Welcome = () => {
  const validate = {
    name: name => nameValidator("Name", name)
  };

  const initialValues = {
    name: ""
  };

  return (
    <div>
      <h1>Welcome to the quiz!</h1>
      <h2>Let's test your knowledge about me.</h2>
      <FormValidation validate={validate} initialValues={initialValues} />
    </div>
  )
}
