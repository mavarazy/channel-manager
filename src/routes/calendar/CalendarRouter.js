import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Calendar from "./Calendar";
import PropertiesNav from "./PropertiesNav";

const CalendarRouter = () => (
  <Fragment>
    <div className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Calendar</h1>
        </div>
      </div>
      <div className="hero-foot">
        <PropertiesNav/>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Route exact path="/calendar/:propertyId" component={Calendar}/>
      </div>
    </section>
  </Fragment>
);

export default CalendarRouter;