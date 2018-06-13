import React from "react";
import { NavLink } from "react-router-dom";

const RANGE = [ -2, -1, 0, 1, 2, 3];

const YearNav = ({ match: { params: { propertyId, year } } }) => (
  <div className="control">
    <div className="dropdown is-hoverable is-rounded">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{year}</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {RANGE.map(v => {
            const tYear = parseInt(year, 10) + v;
            return (
              <NavLink key={v} activeClassName="is-active" className="dropdown-item" to={`/reports/${propertyId}/${tYear}`}>
                {tYear}
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  </div>
);

export default YearNav;