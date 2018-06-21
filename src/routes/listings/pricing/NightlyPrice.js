import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { InputCheckbox, InputNumber } from "../../../components/form";
import { Field } from "redux-form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const NightlyPriceView = ({ nightlyPrice: { smartPricing, minPrice, maxPrice }}) => (
  <Fragment>
    <ValueStatement value={smartPricing ? "On" : "Off"}>Smart Pricing</ValueStatement>
    <hr/>
    <ValueStatement value={minPrice}>Min Price</ValueStatement>
    <hr/>
    <ValueStatement value={maxPrice}>Max Price</ValueStatement>
  </Fragment>
);

// TODO validation needed

const NightlyPriceEdit = ({ onChange, switchMode, nightlyPrice }) => (
  <EditForm
    form="check-in-and-out"
    initialValues={nightlyPrice}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
      <Field
        name="smartPricing"
        component={InputCheckbox}
        title="Smart Pricing"
        subtitle="Automatically adjust your price based on demand. Your price stays within the range you set, and you can change it at any time."
      />
      <Field
        name="minPrice"
        component={InputNumber}
        title="Minimum price"
      />
    <Field
      name="maxPrice"
      component={InputNumber}
      title="Maximum price"
    />
  </EditForm>
);

const NightlyPrice = settingsBlock(
  "Nightly price",
  NightlyPriceView,
  NightlyPriceEdit
);

export default NightlyPrice;