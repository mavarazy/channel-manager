import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Properties from "./Properties";

const PropertiesRouter = () => (
  <Fragment>
    <div className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Properties</h1>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/properties" component={Properties}/>
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PropertiesRouter;