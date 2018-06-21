import React, { Fragment } from "react";
import { Field } from "redux-form";
import { settingsBlock } from "../../../components";
import { Radio, Select } from "../../../components/form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const TIME = [
  "Flexible",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM (noon)",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
  "12AM (midnight)",
  "1AM (next day)"
];

const CheckInAndOutView = ({ checkInStart, checkInEnd, checkOutTime, cancellationPolicy }) => (
  <Fragment>
    <ValueStatement value={`${checkInStart} - ${checkInEnd}`}>Check-in window</ValueStatement>
    <hr/>
    <ValueStatement value={checkOutTime}>Checkout time</ValueStatement>
    <hr/>
    <ValueStatement value={cancellationPolicy}>Cancellation policy</ValueStatement>
  </Fragment>
);

const CheckInAndOutEdit = ({ onChange, switchMode, ...rest }) => (
  <EditForm
    form="check-in-and-out"
    initialValues={rest}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}>
    <Field
      name="checkInStart"
      component={Select}
      title="Check-in start time"
    >
      {TIME.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
    <Field
      name="checkInEnd"
      component={Select}
      title="Check-in end time">
      {TIME.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
    <Field
      name="checkOutTime"
      component={Select}
      title="Checkout time">
      {TIME.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
    <h5 className="subtitle is-size-5">Cancellation policy</h5>
    <Field
      name="cancellationPolicy"
      value="Flexible"
      component={Radio}
      type="radio"
      title="Flexible"
      subtitle="Full refund 1 day prior to arrival"
    />
    <Field
      name="cancellationPolicy"
      value="Moderate"
      component={Radio}
      type="radio"
      title="Moderate"
      subtitle="Full refund 5 day prior to arrival"
    />
    <Field
      name="cancellationPolicy"
      value="Strict"
      component={Radio}
      type="radio"
      title="Strict"
      subtitle="Platform specific"
    />
  </EditForm>
);

// TODO custom range for end date

const CheckInAndOut = settingsBlock(
  "Check-in and checkout",
  CheckInAndOutView,
  CheckInAndOutEdit
);

export default CheckInAndOut;