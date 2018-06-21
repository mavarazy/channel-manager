import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { ValueStatement } from "../ValueStatement";

const ReservationPreferencesView = ({ advanceNotice, preparationTime, bookingWindow }) => (
  <Fragment>
    <ValueStatement value={advanceNotice}>Advance Notice</ValueStatement>
    <hr/>
    <ValueStatement value={preparationTime}>Preparation Time</ValueStatement>
    <hr/>
    <ValueStatement value={bookingWindow}>Booking window</ValueStatement>
  </Fragment>
);

//const ReservationPreferenceForm = ({ handleSubmit })

const ReservationPreferences = settingsBlock(
  "Reservation preferences",
  ReservationPreferencesView,
  ReservationPreferencesView
);

export default ReservationPreferences;