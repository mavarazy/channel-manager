import React, { Fragment } from "react";
import ValueStatement from "../ValueStatement";

const ExtraCharges = ({ extraCharges: { cleaningFee, securityDeposit, extraGuest } }) => (
  <Fragment>
    <ValueStatement value={cleaningFee}>Cleaning Fee</ValueStatement>
    <hr/>
    <ValueStatement value={securityDeposit}>Security Deposit</ValueStatement>
    <hr/>
    <ValueStatement value={extraGuest}>Extra Guest</ValueStatement>
  </Fragment>
);

export default ExtraCharges;