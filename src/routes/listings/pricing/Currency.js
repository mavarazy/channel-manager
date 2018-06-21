import React from "react";
import { Select } from "../../../components/form";
import EditForm from "../EditForm";
import { Field } from "redux-form";
import { settingsBlock } from "../../../components";
import ValueStatement from "../ValueStatement";

const CURRENCIES = [
  "USD",
  "RUB",
  "EUR"
];

const CurrencyView = ({ currency }) => (
  <ValueStatement value={currency}>Currency</ValueStatement>
);

const CurrencyEdit = ({ onChange, switchMode, currency }) => (
  <EditForm
    form="currency"
    initialValues={{ currency }}
    onCancel={switchMode}
    onSubmit={({ currency }) => onChange(currency).then(() => switchMode())}
  >
    <Field
      name="currency"
      component={Select}
      title="Currency"
    >
    {CURRENCIES.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
  </EditForm>
);

const Currency = settingsBlock(
  "Currency",
  CurrencyView,
  CurrencyEdit
);

export default Currency;