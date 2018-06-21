import React, { Fragment } from "react";
import ValueStatement from "../ValueStatement";

const CheckInAndOut = ({ checkInStart, checkInEnd, checkOutTime, cancellationPolicy, checkInNotAllowed }) => (
  <Fragment>
    <ValueStatement value={`${checkInStart} - ${checkInEnd}`}>Check-in window</ValueStatement>
    <hr/>
    <ValueStatement value={checkOutTime}>Checkout time</ValueStatement>
    <hr/>
    <ValueStatement value={checkInNotAllowed.join(", ")}>Check-in not allowed on</ValueStatement>
    <hr/>
    <ValueStatement value={cancellationPolicy}>Cancellation policy -</ValueStatement>
  </Fragment>
);

export default CheckInAndOut;