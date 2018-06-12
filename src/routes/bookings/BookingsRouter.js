import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "./Booking";
import Bookings from "./Bookings";

const BookingsRouter = () => (
  <Fragment>
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Bookings</h1>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/bookings" component={Bookings}/>
            <Route path="/bookings/:bookingId" component={Booking}/>
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default BookingsRouter;