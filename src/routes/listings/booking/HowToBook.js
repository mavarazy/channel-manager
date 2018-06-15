import React, { Fragment } from "react";

const InstantBooking = () => (
  <Fragment>
    <h5 className="title">Guests who meet all your requirements can book instantly.</h5>
    <h6 className="subtitle">Others will need to send a reservation request</h6>
  </Fragment>
);

const RequestBooking = () => (
  <Fragment>
    <h5 className="title">All guests must send a reservation request</h5>
  </Fragment>
);

const HowToBook = ({ process: { instant }}) => instant ? <InstantBooking/> : <RequestBooking/>;

export default HowToBook;