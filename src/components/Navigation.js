import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookingsIcon, CalendarIcon, ListingsIcon, LogoutIcon, ProfileIcon, ReportsIcon, UserIcon, TasksIcon } from "./icon";
import cx from "classnames";

export class Navigation extends Component {
  state = { isActive: false };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    return (
      <nav className="navbar is-spaced" aria-label="main navigation">
        <div className="navbar-brand" onClick={this.toggleActive}>
          <a role="button" className={cx("navbar-burger", { "is-active": this.state.isActive })} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>

        <div className={cx("navbar-menu", { "is-active": this.state.isActive })} onClick={this.toggleActive}>
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
              <span>Reports</span>
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active has-text-link" to="/listings">
              <ListingsIcon/>
              <span>Listings</span>
            </NavLink>
            <NavLink className="navbar-item is-hidden-desktop is-hidden-tablet" activeClassName="is-active" to="/profile">
              <ProfileIcon/>
              <span>Profile</span>
            </NavLink>
            <Link className="navbar-item is-hidden-desktop is-hidden-tablet" to="/auth/logout">
              <LogoutIcon/>
              <span>Logout</span>
            </Link>
          </div>

          <div className="navbar-end is-hidden-mobile">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <UserIcon size="2x"/>
              </div>
              <div className="navbar-dropdown is-boxed is-right">
                <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
                  <ProfileIcon/>
                  <span>Profile</span>
                </NavLink>
                <NavLink className="navbar-item" activeClassName="is-active" to="/tasks">
                  <TasksIcon/>
                  <span>Tasks</span>
                </NavLink>
                <hr className="navbar-divider"/>
                <Link className="navbar-item" to="/auth/logout">
                  <LogoutIcon/>
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}