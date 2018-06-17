import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Tasks from "./Tasks";

const TaskRouter = () => (
  <Fragment>
    <div className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Tasks</h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
          <Route path="/tasks" component={Tasks}/>
      </div>
    </section>
  </Fragment>
);

export default TaskRouter;