import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Listings from "./Listings";

const ListingsRouter = () => (
  <Fragment>
    <div className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Listings</h1>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/listings" component={Listings}/>
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ListingsRouter;