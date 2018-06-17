import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Drawer } from "../../components";
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
        <Route path="/bookings" component={Bookings}/>
        <Route path="/bookings/:bookingId" render={(props) => (
          <Drawer {...props}>
            <Switch>
              <Route exact path="/bookings/:bookingId" component={Booking}/>
              <Route path="/bookings/:bookingId/cancel" component={CancelBooking}/>
            </Switch>
          </Drawer>)}
        />
      </div>
    </section>
  </Fragment>
);

export default BookingsRouter;