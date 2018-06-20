import cx from "classnames";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Checkbox } from "../../components/Checkbox";
import { ViewIcon } from "../../components/icon";
import {
  toggleActive,
  toggleChannel,
  NOT_CONNECTED
} from "../../reducers/listings.actions";

const ListingRow = ({ listingId, address, channels: { airBnB, booking, avito }, isActive, toggleChannel, toggleActive }) => (
  <tr>
    <td>
      <Link to={`/listings/${listingId}/details`}>
        <ViewIcon/>
      </Link>
    </td>
    <td>{address.address}</td>
    <td>
      <Checkbox checked={airBnB.status !== NOT_CONNECTED} onClick={() => toggleChannel(listingId, "airBnB", airBnB.status)} disabled={!isActive}/>
    </td>
    <td>
      <Checkbox checked={booking.status !== NOT_CONNECTED} onClick={() => toggleChannel(listingId, "booking", booking.status)} disabled={!isActive}/>
    </td>
    <td>
      <Checkbox checked={avito.status !== NOT_CONNECTED} onClick={() => toggleChannel(listingId, "avito", avito.status)} disabled={!isActive}/>
    </td>
    <td>
      <Checkbox checked={isActive} onClick={() => toggleActive(listingId, !isActive)}/>
    </td>
  </tr>
);

const ListingTable = ({ listings, ...actions }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th/>
      <th>Address</th>
      <th>AirBnB</th>
      <th>Booking</th>
      <th>Avito</th>
      <th>Active</th>
    </tr>
    </thead>
    <tbody>
    {listings.map(listing => <ListingRow key={listing.listingId} {...listing} {...actions} />)}
    </tbody>
  </table>
);

const Listings = ({ listings, ...actions }) => {
  return (
    <ListingTable listings={listings} {...actions}/>
  );
};

const mapStateToProps = ({ listings }) => ({ listings: Object.values(listings) });
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    toggleActive,
    toggleChannel
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Listings);