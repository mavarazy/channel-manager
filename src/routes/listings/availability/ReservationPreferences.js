import React, { Fragment } from "react";
import { Field } from "redux-form";
import { settingsBlock } from "../../../components";
import { InputSelect } from "../../../components/form";
import EditForm from "../EditForm";
import { ValueStatement } from "../ValueStatement";

const NOTICE_TO_TEXT = {
  0: "Same day",
  1: "At least 1 day’s notice",
  3: "At least 3 day’s notice",
  7: "At least 7 day’s notice"
};

const PREPARATION_TO_TEXT = {
  0: "None",
  1: "Block 1 night before and after each reservation",
  2: "Block 2 nights before and after each reservation"
};

const BOOKING_WINDOW_TO_TEXT = {
  0: "Dates unavailable by default",
  3: "3 months into the future",
  6: "6 months into the future",
  9: "9 months into the future",
  12: "12 months into the future",
  15: "All future dates"
};

const ReservationPreferencesView = ({ advanceNotice, preparationTime, bookingWindow }) => (
  <Fragment>
    <ValueStatement value={NOTICE_TO_TEXT[advanceNotice]}>Advance Notice</ValueStatement>
    <hr/>
    <ValueStatement value={PREPARATION_TO_TEXT[preparationTime]}>Preparation Time</ValueStatement>
    <hr/>
    <ValueStatement value={BOOKING_WINDOW_TO_TEXT[bookingWindow]}>Booking window</ValueStatement>
  </Fragment>
);

const ReservationPreferenceEdit = ({ onChange, switchMode, ...rest }) => (
  <EditForm
    form="reservation-preferences"
    initialValues={rest}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}
  >
    <Field
      name="advanceNotice"
      component={InputSelect}
      type="select"
      title="Advance Notice"
    >
      {Object.entries(NOTICE_TO_TEXT).map(([val, text]) => (<option key={val} value={val}>{text}</option>))}
    </Field>
    <Field
      name="preparationTime"
      component={InputSelect}
      type="select"
      title="Preparation Time"
      subtitle="The nights before and after each reservation are available."
    >
      {Object.entries(PREPARATION_TO_TEXT).map(([val, text]) => (<option key={val} value={val}>{text}</option>))}
    </Field>
    <Field
      name="bookingWindow"
      component={InputSelect}
      type="select"
      title="Booking window"
      subtitle="All dates on your calendar are unavailable until you unblock them."
    >
      {Object.entries(BOOKING_WINDOW_TO_TEXT).map(([val, text]) => (<option key={val} value={val}>{text}</option>))}
    </Field>
  </EditForm>
);

const ReservationPreferences = settingsBlock(
  "Reservation preferences",
  ReservationPreferencesView,
  ReservationPreferenceEdit
);

export default ReservationPreferences;