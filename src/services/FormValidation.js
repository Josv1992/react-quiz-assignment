import React, { useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionTypes from './../store/actionTypes';
import { Form } from "../components/Form/Form";
import { Debug } from "./Debug";

export const FormValidation = ({ initialValues, validate }) => {
  const [values, setValues] = React.useState(initialValues);

  const [errors, setErrors] = React.useState({});

  const [touched, setTouched] = React.useState({});

  const dispatch = useDispatch();


  // change event handler
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  // form submit handler
  const HandleSubmit = evt => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
      setName(values['firstName']);
      setGameState(1);
      alert(JSON.stringify(values, null, 2));

    }
  };
  const setName = useCallback(
    (name) => dispatch({type: 'SETNAME', value: name}),
    [dispatch],
  )

  const setGameState = useCallback(
    () => dispatch({type: 'SETGAMESTATE', value: 1}),
    [dispatch],
    )

  return (
    <>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        HandleSubmit={HandleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      <Debug values={values} errors={errors} touched={touched} />
    </>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.score,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSetName: () => dispatch({type: actionTypes.SETNAME}),
      onSetGameState: () => dispatch({type: actionTypes.SETGAMESTATE})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormValidation);