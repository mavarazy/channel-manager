import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>

    <div className="navbar-menu">

      <div className="navbar-start">
        <NavLink className="navbar-item" activeClassName="is-active" to="/bookings">
          Bookings
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active" to="/calendar">
          Calendar
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active" to="/reports">
          Reports
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active" to="/properties">
          Properties
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="button is-primary is-inverted is-outlined">
            Logout
          </div>
        </div>
      </div>

    </div>
  </nav>
);