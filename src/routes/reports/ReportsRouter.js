import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PropertyDropdown from "../../components/PropertiesDropdown";
import PropertyReport from "./PropertyReport";

const CURRENT_YEAR = new Date().getFullYear();

const ReportsRouter = () => (
  <Fragment>
    <div className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Reports</h1>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Route path="/reports/:propertyId?" render={props => <PropertyDropdown {...props} toPath={propertyId => `/reports/${propertyId}/${CURRENT_YEAR}`}/>}/>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Route path="/reports/:propertyId/:year" component={PropertyReport}/>
      </div>
    </section>
  </Fragment>
);

export default ReportsRouter;