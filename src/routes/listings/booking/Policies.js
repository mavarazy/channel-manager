import React from "react";

const Policies = ({ policy: { checkInStart, checkInEnd, checkOutTime, cancellationPolicy }}) => (
  <div className="columns">
    <div className="column">
      <h1 className="subtitle is-marginless">Check-in window {checkInStart} - {checkInEnd}</h1>
      <h1 className="subtitle is-marginless">Checkout time - {checkOutTime}</h1>
      <h1 className="subtitle is-marginless">Cancellation policy - {cancellationPolicy}</h1>
    </div>
  </div>
);

export default Policies;