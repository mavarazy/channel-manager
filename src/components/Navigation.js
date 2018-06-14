import React from "react";
import { NavLink, Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/fontawesome-free-solid'

export const Navigation = () => (
  <nav className="navbar is-spaced" aria-label="main navigation">
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
        <NavLink className="navbar-item" activeClassName="is-active" to="/listings">
          Listings
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <FontAwesomeIcon icon={faUserCircle} size="2x"/>
          </div>
          <div className="navbar-dropdown is-boxed is-right">
            <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
              Profile
            </NavLink>
            <hr className="navbar-divider"/>
            <Link className="navbar-item" to="/auth/logout">
              Logout
            </Link>
          </div>
        </div>
      </div>

    </div>
  </nav>
);