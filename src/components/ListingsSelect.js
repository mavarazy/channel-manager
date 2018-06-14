import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

const ListingsSelect = ({ listings, toPath, match: { params: { listingId } } }) => (
  <div className="control">
    <div className="dropdown is-hoverable is-rounded">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{listingId ? listings.find(pr => pr.listingId === listingId).address.address : "Select listing"}</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {listings.map(({ listingId, address: { address } }) => (
            <NavLink key={listingId} activeClassName="is-active" className="dropdown-item" to={toPath(listingId)}>
              {address}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ listings }) => ({ listings: Object.values(listings) });

export default withRouter(connect(mapStateToProps)(ListingsSelect));