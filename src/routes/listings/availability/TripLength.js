import React, { Fragment } from "react";
import ValueStatement from "../ValueStatement";

const TripLength = ({ min, max}) => (
  <Fragment>
    <ValueStatement value={min}>Minimum stay</ValueStatement>
    <hr/>
    <ValueStatement value={max}>Maximum stay</ValueStatement>
  </Fragment>
);

export default TripLength;