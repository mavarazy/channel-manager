import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { Input } from "../../../components/form";
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
    form="discounts"
    initialValues={discounts}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
    <Field
      name="weekly"
      component={Input}
      title="Weekly discount"
    />
    <Field
      name="monthly"
      component={Input}
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