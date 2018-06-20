import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
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
    <section className="section">
      <div className="container">
        <Route exact path="/bookings" component={Bookings}/>
        <Switch>
          <Route exact path="/bookings/:bookingId" component={Booking}/>
          <Route path="/bookings/:bookingId/cancel" component={CancelBooking}/>
        </Switch>
      </div>
    </section>
  </Fragment>
);

export default BookingsRouter;