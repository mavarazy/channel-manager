import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "./components";
import BookingsRouter from "./routes/bookings/BookingsRouter";
import CalendarRouter from "./routes/calendar/CalendarRouter";
import NotFound from "./routes/NotFound";
import PropertiesRouter from "./routes/properties/PropertiesRouter";
import ReportsRouter from "./routes/reports/ReportsRouter";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navigation/>
      <Switch>
        <Redirect path="/" to="/bookings" exact/>
        <Route path="/bookings" component={BookingsRouter}/>
        <Route path="/properties" component={PropertiesRouter}/>
        <Route path="/calendar" component={CalendarRouter}/>
        <Route path="/reports" component={ReportsRouter}/>
        <Route component={NotFound}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
