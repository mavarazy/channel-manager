import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ListingAvailability from "./availability";
import ListingBooking from "./booking";
import ChannelConnections from "./ChannelConnections";
import ListingDetails from "./details";
import ListingChannels from "./ListingChannels";
import Listings from "./Listings";
import ListingViewNav from "./ListingViewNav";
import ListingPricing from "./pricing";

const ListingsRouter = () => (
  <Fragment>
    <div className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Listings
          </h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Route exact path="/listings" component={ChannelConnections}/>
        <Route exact path="/listings" component={Listings}/>
        <Route path="/listings/:listingId" component={ListingChannels}/>
        <Route path="/listings/:listingId" component={ListingViewNav}/>
        <Switch>
          <Route path="/listings/:listingId/availability" component={ListingAvailability}/>
          <Route path="/listings/:listingId/details" component={ListingDetails}/>
          <Route path="/listings/:listingId/booking" component={ListingBooking}/>
          <Route path="/listings/:listingId/pricing" component={ListingPricing}/>
        </Switch>
      </div>
    </section>
  </Fragment>
);

export default ListingsRouter;