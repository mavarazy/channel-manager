import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { InputNumber } from "../../../components/form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const LengthOfStayDiscountView = ({ discounts: { weekly, monthly } }) => (
  <Fragment>
    <ValueStatement value={`${weekly} %`}>Weekly discount</ValueStatement>
    <hr/>
    <ValueStatement value={`${monthly} %`}>Monthly discount</ValueStatement>
  </Fragment>
);

const LengthOfStayDiscountEdit = ({ onChange, switchMode, discounts }) => (
  <EditForm
    form="nightly-price"
    initialValues={discounts}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
    <Field
      name="weekly"
      component={InputNumber}
      title="Weekly discount"
    />
    <Field
      name="monthly"
      component={InputNumber}
      title="Monthly discount"
    />
  </EditForm>
);

// TODO validation

const LengthOfStayDiscount = settingsBlock(
  "Length-of-stay discounts",
  LengthOfStayDiscountView,
  LengthOfStayDiscountEdit
);

export default LengthOfStayDiscount;