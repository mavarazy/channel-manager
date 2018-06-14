import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Calendar from "./Calendar";
import ListingsSelect from "../../components/ListingsSelect";

const CalendarRouter = () => (
  <Fragment>
    <div className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Calendar</h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Route path="/calendar/:listingId?" render={props => <ListingsSelect {...props} toPath={(listingId) => `/calendar/${listingId}`}/>}/>
      </div>
    </section>
    <section className="section is-paddingless">
      <div className="container">
        <Route exact path="/calendar/:listingId" component={Calendar}/>
      </div>
    </section>
  </Fragment>
);

export default CalendarRouter;