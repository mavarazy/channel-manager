import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { Input } from "../../../components/form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const ExtraChargesView = ({ extraCharges: { cleaningFee, securityDeposit, extraGuest } }) => (
  <Fragment>
    <ValueStatement value={cleaningFee}>Cleaning Fee</ValueStatement>
    <hr/>
    <ValueStatement value={securityDeposit}>Security Deposit</ValueStatement>
    <hr/>
    <ValueStatement value={extraGuest}>Extra Guest</ValueStatement>
  </Fragment>
);

const ExtraChargesEdit = ({ onChange, switchMode, extraCharges }) => (
  <EditForm
    form="extra-charges"
    initialValues={extraCharges}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
    <Field
      name="cleaningFee"
      component={Input}
      title="Cleaning Fee"
    />
    <Field
      name="securityDeposit"
      component={Input}
      title="Security Deposit"
    />
    <Field
      name="extraGuest"
      component={Input}
      title="Extra Guest"
    />
  </EditForm>
);

const ExtraCharges = settingsBlock(
  "Extra charges",
  ExtraChargesView,
  ExtraChargesEdit
);

export default ExtraCharges;