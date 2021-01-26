import React from "react";

export const Form = ({
  errors,
  handleBlur,
  handleChange,
  HandleSubmit,
  touched,
  values
}) => {
  return (
    <div>
      <div>
        Please fill in your name:
      </div>
      <form onSubmit={HandleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">
            Name 
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            {touched.firstName && errors.firstName}
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
