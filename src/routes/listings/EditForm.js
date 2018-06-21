import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Form, reduxForm } from "redux-form";

const EditForm = ({ handleSubmit, change, onCancel, pristine, submitting, children }) => (
  <Form onSubmit={handleSubmit}>
    {children}
    <div className="buttons">
      <a className="button" onClick={onCancel}>Cancel</a>
      <button type="submit" className={cx("button is-primary", { "is-loading": submitting })} disabled={pristine}>Save
      </button>
    </div>
  </Form>
);

EditForm.propTypes = {
  form: PropTypes.string.isRequired
};

export default reduxForm({})(EditForm);