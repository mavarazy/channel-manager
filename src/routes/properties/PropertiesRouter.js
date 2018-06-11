import React from "react";
import Properties from "./Properties";
import { Switch, Route } from "react-router-dom";

const PropertiesRouter = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <Switch>
          <Route exact path="/properties" component={Properties}/>
        </Switch>
      </div>
    </div>
  </div>
);

export default PropertiesRouter;