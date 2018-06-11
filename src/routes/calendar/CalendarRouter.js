import React, { Fragment } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PropertiesNav from "./PropertiesNav";
import Calendar from "./Calendar";

const CalendarRouter = () => (
  <Fragment>
  <div className="hero is-success">
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
    <Switch>
      <Route exact path="/calendar" component={Calendar}/>
    </Switch>
  </div>
  </Fragment>
);

export default CalendarRouter;