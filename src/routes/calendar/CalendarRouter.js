import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PropertiesNav from "./PropertiesNav";
import Calendar from "./Calendar";

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
  <div className="container">
    <Route exact path="/calendar/:propertyId" component={Calendar}/>
  </div>
  </Fragment>
);

export default CalendarRouter;