import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation, PrivateRoute } from "./components";
import AuthRouter from "./routes/auth/AuthRouter";
import BookingsRouter from "./routes/bookings/BookingsRouter";
import CalendarRouter from "./routes/calendar/CalendarRouter";
import NotFound from "./routes/NotFound";
import ProfileRouter from "./routes/profile/ProfileRouter";
import PropertiesRouter from "./routes/properties/PropertiesRouter";
import ReportsRouter from "./routes/reports/ReportsRouter";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/auth"/>
        <Route>
          <Navigation/>
        </Route>
      </Switch>
      <Switch>
        <Redirect path="/" to="/bookings" exact/>
        <Route path="/auth" component={AuthRouter}/>
        <PrivateRoute path="/bookings" component={BookingsRouter}/>
        <PrivateRoute path="/properties" component={PropertiesRouter}/>
        <PrivateRoute path="/calendar" component={CalendarRouter}/>
        <PrivateRoute path="/reports" component={ReportsRouter}/>
        <PrivateRoute path="/profile" component={ProfileRouter}/>
        <Route component={NotFound}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
