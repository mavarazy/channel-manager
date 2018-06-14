import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BookingsIcon, CalendarIcon, ReportsIcon, ListingsIcon, ProfileIcon, LogoutIcon, UserIcon } from "./icon";

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
          <BookingsIcon/>
          <span>
            Bookings
          </span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/calendar">
          <CalendarIcon/>
          <span>Calendar</span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/reports">
          <ReportsIcon/>
          <span>
            Reports
          </span>
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/listings">
          <ListingsIcon/>
          <span>
            Listings
          </span>
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <UserIcon size="2x"/>
          </div>
          <div className="navbar-dropdown is-boxed is-right">
            <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
              <ProfileIcon/>
              <span>
                Profile
              </span>
            </NavLink>
            <hr className="navbar-divider"/>
            <Link className="navbar-item" to="/auth/logout">
              <LogoutIcon/>
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