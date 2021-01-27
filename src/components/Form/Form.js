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
          <label htmlFor="name-input">
            <input
              type="text"
              className="form-control"
              id="name-input"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              required
            />
            {touched.name && errors.name}
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
