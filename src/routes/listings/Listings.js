import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Switch } from "../../components";
import { Checkbox } from "../../components/Checkbox";
import { ViewIcon } from "../../components/icon";
import {
  toggleActive,
  toggleChannel,
  NOT_CONNECTED, CONNECTED
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
      <Switch checked={isActive} onClick={() => toggleActive(listingId, !isActive)}/>
    </td>
    <td>
      <Checkbox
        checked={airBnB.status === CONNECTED}
        onClick={() => toggleChannel(listingId, "airBnB", airBnB.status)}
        disabled={!isActive || airBnB.status === NOT_CONNECTED}/>
    </td>
    <td>
      <Checkbox
        checked={booking.status === CONNECTED}
        onClick={() => toggleChannel(listingId, "booking", booking.status)}
        disabled={!isActive || booking.status === NOT_CONNECTED}/>
    </td>
    <td>
      <Checkbox
        checked={avito.status === CONNECTED}
        onClick={() => toggleChannel(listingId, "avito", avito.status)}
        disabled={!isActive || avito.status === NOT_CONNECTED}/>
    </td>
  </tr>
);

const ListingTable = ({ listings, ...actions }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th/>
      <th>Address</th>
      <th>Active</th>
      <th>AirBnB</th>
      <th>Booking</th>
      <th>Avito</th>
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