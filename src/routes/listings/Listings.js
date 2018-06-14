import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getListings } from "../../reducers/listings.actions";

const ListingChannelStatus = ({ status, link }) => {
  if (status === "notConnected") {
    return (
      <span>Not&nbsp;Connected</span>
    )
  } else {
    return (
      <a href={link}>{link}</a>
    );
  }
};

const ListingActive = ({ isActive, toggleActive }) => (
  <div className="field">
    <input type="checkbox" className="switch is-rtl is-success" checked={isActive} onChange={toggleActive}/>
    <label/>
  </div>
);

const ListingRow = ({ listingId, address, channels: { airBnB, booking, avito }, isActive }) => (
  <tr>
    <td>{address.address}</td>
    <td><ListingChannelStatus {...airBnB}/></td>
    <td><ListingChannelStatus {...booking}/></td>
    <td><ListingChannelStatus {...avito}/></td>
    <td><ListingActive isActive={isActive}/></td>
  </tr>
);

const ListingTable = ({ listings }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th>Address</th>
      <th>AirBnB</th>
      <th>Booking</th>
      <th>Avito</th>
      <th>Active</th>
    </tr>
    </thead>
    <tbody>
    {listings.map(listing => <ListingRow key={listing.listingId} {...listing}/>)}
    </tbody>
  </table>
);

const Listings = ({ listings }) => (
  <ListingTable listings={listings}/>
);

const mapStateToProps = ({ listings }) => ({ listings: Object.values(listings) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getListings }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Listings);