import {
  faBookmark,
  faCalendar,
  faChartLine,
  faHome,
  faUserCircle,
  faUserCog,
  faSignOutAlt
} from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/bookings">
          <span className="icon">
            <FontAwesomeIcon icon={faBookmark}/>
          </span>
          <span>
            Bookings
          </span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/calendar">
          <span className="icon">
            <FontAwesomeIcon icon={faCalendar}/>
          </span>
          <span>Calendar</span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/reports">
          <span className="icon">
            <FontAwesomeIcon icon={faChartLine}/>
          </span>
          <span>
            Reports
          </span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/listings">
          <span className="icon">
            <FontAwesomeIcon icon={faHome}/>
          </span>
          <span>
            Listings
          </span>
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <FontAwesomeIcon icon={faUserCircle} size="2x"/>
          </div>
          <div className="navbar-dropdown is-boxed is-right">
            <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
              <span className="icon">
                <FontAwesomeIcon icon={faUserCog}/>
              </span>
              <span>
                Profile
              </span>
            </NavLink>
            <hr className="navbar-divider"/>
            <Link className="navbar-item" to="/auth/logout">
              <span className="icon">
                <FontAwesomeIcon icon={faSignOutAlt}/>
              </span>
              <span>
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </nav>
);