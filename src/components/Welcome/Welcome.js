import React, { useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { FormValidation } from '../../services/FormValidation'


export const Welcome = () => {
  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const validate = {
    firstName: name => nameValidation("First Name", name)
  };

  const initialValues = {
    firstName: "Name"
  };

  return (
    <div>
      <h1>Welcome to the quiz!</h1>
      <h2>Let's test your knowledge about me.</h2>
      <FormValidation validate={validate} initialValues={initialValues} />
    </div>
  )
}
