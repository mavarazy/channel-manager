import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Status from "./Status";

const StatusRouter = () => (
  <Fragment>
    <div className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Status</h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
          <Route path="/status" component={Status}/>
      </div>
    </section>
  </Fragment>
);

export default StatusRouter;