import React, { Fragment } from "react";
import ValueStatement from "../ValueStatement";

const LengthOfStayDiscount = ({ discounts: { weekly, monthly } }) => (
  <Fragment>
    <ValueStatement value={`${weekly} %`}>Weekly discount</ValueStatement>
    <hr/>
    <ValueStatement value={`${monthly} %`}>Monthly discount</ValueStatement>
  </Fragment>
);

export default LengthOfStayDiscount;