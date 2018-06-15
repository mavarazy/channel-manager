import React, { Fragment } from "react";

const ExtraCharges = ({ extraCharges: { cleaningFee, securityDeposit, extraGuest } }) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Cleaning Fee <strong>{cleaningFee}</strong></h1>
    <h1 className="subtitle is-marginless">Security Deposit <strong>{securityDeposit}</strong></h1>
    <h1 className="subtitle is-marginless">Extra Guest <strong>{extraGuest}</strong></h1>
  </Fragment>
);

export default ExtraCharges;