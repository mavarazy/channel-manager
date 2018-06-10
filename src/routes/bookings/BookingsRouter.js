import React from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "./Booking";
import Bookings from "./Bookings";

const BookingsRouter = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <Switch>
          <Route exact path="/bookings" component={Bookings}/>
          <Route path="/bookings/:bookingId" component={Booking}/>
        </Switch>
      </div>
    </div>
  </div>
);

export default BookingsRouter;