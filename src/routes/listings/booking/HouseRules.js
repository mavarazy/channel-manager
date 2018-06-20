import cx from "classnames";
import React, { Fragment } from "react";
import { Field, Form, reduxForm } from "redux-form";
import { settingsBlock } from "../../../components";
import { InputCheckbox } from "../../../components/form";
import Statement from "./Statement";

const HouseRulesView = ({ houseRules: { suitableForChildren, suitableForInfants, petsAllowed, smokingAllowed, partiesAllowed } }) => (
  <Fragment>
    <Statement isTrue={suitableForChildren}>
      {suitableForChildren ? "Suitable for children (2-12 years)" : "Not suitable for children (2-12 years)"}
    </Statement>
    <hr/>
    <Statement isTrue={suitableForInfants}>
      {suitableForInfants ? "Suitable for infants (under 2 years)": "Not suitable for infants (under 2 years)"}
    </Statement>
    <hr/>
    <Statement isTrue={petsAllowed}>
      {petsAllowed ? "Suitable for pets": "Not suitable for pets"}
    </Statement>
    <hr/>
    <Statement isTrue={smokingAllowed}>
      {smokingAllowed ? "Smoking allowed": "No smoking"}
    </Statement>
    <hr/>
    <Statement isTrue={partiesAllowed}>
      {partiesAllowed ? "Parties allowed": "No parties or events"}
    </Statement>
  </Fragment>
);

const HouseRulesForm = ({ handleSubmit, change, onCancel, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="suitableForChildren"
      component={InputCheckbox}
      title="Suitable for children (2-12 years)"
    />
    <Field
      name="suitableForInfants"
      component={InputCheckbox}
      title="Suitable for infants (under 2 years)"
    />
    <Field
      name="petsAllowed"
      component={InputCheckbox}
      title="Pets allowed"
    />
    <Field
      name="smokingAllowed"
      component={InputCheckbox}
      title="Smoking allowed"
    />
    <Field
      name="partiesAllowed"
      component={InputCheckbox}
      title="Parties allowed"
    />
    <div className="buttons">
      <a className="button" onClick={onCancel}>Cancel</a>
      <button type="submit" className={cx("button is-primary", { "is-loading": submitting })} disabled={pristine}>Save
      </button>
    </div>
  </Form>
);

const HouseRulesFormRedux = reduxForm({ form: "house-rules" })(HouseRulesForm);

const HouseRulesEdit = ({ houseRules, switchMode, onChange}) => (
  <HouseRulesFormRedux
    initialValues={houseRules}
    onSubmit={(req) => onChange(req).then(() => switchMode())}
    onCancel={switchMode}
  />
);

// TODO additional & details

const HouseRules = settingsBlock(
  "House rules",
  HouseRulesView,
  HouseRulesEdit
);

export default HouseRules;