import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "./Booking";
import Bookings from "./Bookings";
import CancelBooking from "./CancelBooking";

const BookingsRouter = () => (
  <Fragment>
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Bookings
          </h1>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/bookings" component={Bookings}/>
            <Route exact path="/bookings/:bookingId" component={Booking}/>
            <Route path="/bookings/:bookingId/cancel" component={CancelBooking}/>
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default BookingsRouter;