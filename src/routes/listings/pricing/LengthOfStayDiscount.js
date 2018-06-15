import React, { Fragment } from "react";

const LengthOfStayDiscount = ({ discounts: { weekly, monthly } }) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Weekly discount <strong>{weekly} %</strong></h1>
    <h1 className="subtitle is-marginless">Monthly discount <strong>{monthly} %</strong></h1>
  </Fragment>
);

export default LengthOfStayDiscount;