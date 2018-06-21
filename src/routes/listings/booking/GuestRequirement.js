import cx from "classnames";
import React, { Fragment } from "react";
import { Field, Form, reduxForm } from "redux-form";
import { settingsBlock } from "../../../components";
import { InputCheckbox } from "../../../components/form";
import BooleanStatement from "../BooleanStatement";

const GuestRequirementView = ({ guestRequirements: { standard, governmentId, recommendations } }) => (
  <Fragment>
    <BooleanStatement isTrue={standard}>
      Standard Platform requirements
    </BooleanStatement>
    <hr/>
    <BooleanStatement isTrue={governmentId}>
      {governmentId ? "Government-issues ID" : "Government-issues ID"}
    </BooleanStatement>
    <hr/>
    <BooleanStatement isTrue={recommendations}>
      {recommendations ? "Recommendation from other hosts" : "Recommendation from other hosts"}
    </BooleanStatement>
  </Fragment>
);

const GuestRequirementsForm = ({ handleSubmit, change, onCancel, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="standard"
      component={InputCheckbox}
      title="Standard Platform requirements"
      subtitle="Confirmed phone number, email address, payment information, and agreement to House Rules."
      disabled={true}
    />
    <Field
      name="governmentId"
      component={InputCheckbox}
      title="Government-issued ID"
      subtitle="These guests have verified identities."
    />
    <Field
      name="recommendations"
      component={InputCheckbox}
      title="Recommendation from other hosts"
      subtitle="These guests have traveled on Airbnb, are recommended by other hosts, and have no negative reviews."
    />
    <div className="buttons">
      <a className="button" onClick={onCancel}>Cancel</a>
      <button type="submit" className={cx("button is-primary", { "is-loading": submitting })} disabled={pristine}>Save
      </button>
    </div>
  </Form>
);

// TODO tripInfo

const GuestRequirementsFormRedux = reduxForm({ form: "guest-requirements" })(GuestRequirementsForm);

const GuestRequirementsEdit = ({ guestRequirements, onChange, switchMode }) => (
  <GuestRequirementsFormRedux
    initialValues={guestRequirements}
    onSubmit={(req) => onChange(req).then(() => switchMode())}
    onCancel={switchMode}
  />
);

const GuestRequirement = settingsBlock("Guest Requirement", GuestRequirementView, GuestRequirementsEdit);

export default GuestRequirement;