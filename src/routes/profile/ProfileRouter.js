import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Profile from "./Profile";

const ProfileRouter = () => (
  <Fragment>
    <div className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Profile</h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Route exact path="/profile" component={Profile}/>
      </div>
    </section>
  </Fragment>
);

export default ProfileRouter;