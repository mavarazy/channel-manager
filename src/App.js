import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation, PrivateRoute } from "./components";

import AuthRouter from "./routes/auth/AuthRouter";
import BookingsRouter from "./routes/bookings/BookingsRouter";
import CalendarRouter from "./routes/calendar/CalendarRouter";
import ListingsRouter from "./routes/listings/ListingsRouter";
import ProfileRouter from "./routes/profile/ProfileRouter";
import ReportsRouter from "./routes/reports/ReportsRouter";
import NotFound from "./routes/NotFound";
import StatusRouter from "./routes/status/StatusRouter";

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
        <PrivateRoute path="/listings" component={ListingsRouter}/>
        <PrivateRoute path="/calendar" component={CalendarRouter}/>
        <PrivateRoute path="/reports" component={ReportsRouter}/>
        <PrivateRoute path="/profile" component={ProfileRouter}/>
        <PrivateRoute path="/status" component={StatusRouter}/>
        <Route component={NotFound}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
