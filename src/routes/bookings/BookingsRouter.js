import React from "react";
import { Switch, Route } from "react-router-dom";
import Bookings from "./Bookings";

const BookingsRouter = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <Switch>
          <Route path="/bookings" component={Bookings}/>
          <h1 className="title">Bookings</h1>
        </Switch>
      </div>
    </div>
  </div>
);

export default BookingsRouter;