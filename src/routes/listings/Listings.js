import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import cx from "classnames";
import { getListings, activateListing, deActivateListing } from "../../reducers/listings.actions";

const ListingContext = React.createContext({ toggleActive: () => {} });

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

class ListingActive extends Component {
  state = { isLoading: false };

  handleToggle = (toggleActive) => {
    this.setState({ isLoading: true });
    const { listingId, isActive } = this.props;
    toggleActive(listingId, !isActive).then(() => this.setState({ isLoading: false }))
  };

  render() {
    const { isActive, listingId } = this.props;
    return (
      <ListingContext.Consumer>
        {({ toggleActive }) => (
          <div className="field">
            <input id={listingId}
              type="checkbox"
              className={cx("switch is-rtl is-rounded", { "is-success": isActive, "is-info": this.state.isLoading })}
              checked={isActive}
              onChange={() => this.handleToggle(toggleActive)}
              disabled={this.state.isLoading}
            />
            <label htmlFor={listingId}/>
          </div>
        )}
      </ListingContext.Consumer>
    );
  }
}


const ListingRow = ({ listingId, address, channels: { airBnB, booking, avito }, isActive }) => (
  <tr>
    <td>{address.address}</td>
    <td><ListingChannelStatus {...airBnB}/></td>
    <td><ListingChannelStatus {...booking}/></td>
    <td><ListingChannelStatus {...avito}/></td>
    <td><ListingActive listingId={listingId} isActive={isActive}/></td>
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

const Listings = ({ listings, activateListing, deActivateListing }) => {
  const context = {
    toggleActive: (listingId, isActive) => isActive ? activateListing(listingId) : deActivateListing(listingId)
  };

  return (
    <ListingContext.Provider value={context}>
      <ListingTable listings={listings}/>
    </ListingContext.Provider>
  );
};

const mapStateToProps = ({ listings }) => ({ listings: Object.values(listings) });
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getListings,
    activateListing,
    deActivateListing
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Listings);