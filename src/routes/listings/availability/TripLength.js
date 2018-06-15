import React, { Fragment } from "react";

const TripLength = ({ min, max}) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Minimum stay <strong>{min}</strong></h1>
    <h1 className="subtitle is-marginless">Maximum stay <strong>{max}</strong></h1>
  </Fragment>
);

export default TripLength;