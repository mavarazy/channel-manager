import React, { Fragment } from "react";

const ReservationPreferences = ({ advanceNotice, preparationTime, bookingWindow }) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Advance Notice <strong>{advanceNotice}</strong></h1>
    <h1 className="subtitle is-marginless">Preparation Time <strong>{preparationTime}</strong></h1>
    <h1 className="subtitle is-marginless">Booking window <strong>{bookingWindow}</strong></h1>
  </Fragment>
);

export default ReservationPreferences;