import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Calendar from "./Calendar";
import PropertiesDropdown from "./PropertiesDropdown";

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
        <Route path="/calendar/:propertyId?" component={PropertiesDropdown}/>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Route exact path="/calendar/:propertyId" component={Calendar}/>
      </div>
    </section>
  </Fragment>
);

export default CalendarRouter;