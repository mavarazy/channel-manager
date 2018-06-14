import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ListingsSelect from "../../components/ListingsSelect";
import YearMonthNav from "./YearMonthNav";
import YearMonthReport from "./YearMonthReport";
import YearNav from "./YearNav";
import YearReport from "./YearReport";

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
        <div className="field has-addons">
          <Route path="/reports/:listingId/:year" component={YearNav}/>
          <Route path="/reports/:listingId?" render={props => <ListingsSelect {...props} toPath={listingId => `/reports/${listingId}/${CURRENT_YEAR}`}/>}/>
        </div>
        <Route path="/reports/:listingId/:year" component={YearMonthNav}/>
      </div>
    </section>
    <section className="section is-paddingless">
      <div className="container">
        <Route path="/reports/:listingId/:year" component={YearReport} exact/>
        <Route path="/reports/:listingId/:year/:month" component={YearMonthReport} exact/>
      </div>
    </section>
  </Fragment>
);

export default ReportsRouter;