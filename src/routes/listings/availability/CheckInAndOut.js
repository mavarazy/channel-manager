import React, { Fragment } from "react";

const CheckInAndOut = ({ checkInStart, checkInEnd, checkOutTime, cancellationPolicy, checkInNotAllowed }) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Check-in window <strong>{checkInStart} - {checkInEnd}</strong></h1>
    <h1 className="subtitle is-marginless">Checkout time - <strong>{checkOutTime}</strong></h1>
    <h1 className="subtitle is-marginless">Check-in not allowed on - <strong>{checkInNotAllowed.join(", ")}</strong></h1>
    <h1 className="subtitle is-marginless">Cancellation policy - <strong>{cancellationPolicy}</strong></h1>
  </Fragment>
);

export default CheckInAndOut;