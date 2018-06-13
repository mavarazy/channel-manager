import React from "react";
import { NavLink } from "react-router-dom";

const YearMonthNav = ({ match: { params: { year, propertyId }}}) => (
  <div className="field has-addons has-text-centered">
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}`} exact>
        {year}
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/1`}>
        Jan
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/2`}>
        Feb
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/3`}>
        Mar
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/4`}>
        Apr
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/5`}>
        May
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/6`}>
        Jun
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/7`}>
        Jul
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/8`}>
        Aug
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/9`}>
        Sep
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/10`}>
        Oct
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/11`}>
        Nov
      </NavLink>
    </p>
    <p className="control">
      <NavLink activeClassName="is-primary" className="button" to={`/reports/${propertyId}/${year}/12`}>
        Dec
      </NavLink>
    </p>
  </div>
);

export default YearMonthNav