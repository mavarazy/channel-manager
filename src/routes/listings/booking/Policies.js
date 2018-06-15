import React, { Fragment } from "react";

const Policies = ({ policy: { checkInStart, checkInEnd, checkOutTime, cancellationPolicy } }) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Check-in window {checkInStart} - {checkInEnd}</h1>
    <h1 className="subtitle is-marginless">Checkout time - {checkOutTime}</h1>
    <h1 className="subtitle is-marginless">Cancellation policy - {cancellationPolicy}</h1>
  </Fragment>
);

export default Policies;