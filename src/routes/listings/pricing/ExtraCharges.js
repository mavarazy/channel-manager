import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { InputNumber } from "../../../components/form";
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
    form="discounts"
    initialValues={extraCharges}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
    <Field
      name="cleaningFee"
      component={InputNumber}
      title="Cleaning Fee"
    />
    <Field
      name="securityDeposit"
      component={InputNumber}
      title="Security Deposit"
    />
    <Field
      name="extraGuest"
      component={InputNumber}
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