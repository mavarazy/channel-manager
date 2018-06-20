import React from "react";
import { bindActionCreators } from "redux";
import { Checkbox, Switch } from "../../components";
import { connect } from "react-redux";
import { getListing, NOT_CONNECTED, toggleChannel, toggleActive, CONNECTED } from "../../reducers/listings.actions";

const ListingChannels = ({ channels: { airBnB, avito, booking }, isActive, toggleChannel, toggleActive }) => (
  <div className="columns">
    <div className="column">
    </div>
    <div className="column">
      <Switch
        checked={isActive}
        onClick={() => toggleActive(!isActive)}
        text="Active"
      />
    </div>
    <div className="column">
      <Checkbox
        checked={airBnB.status === CONNECTED}
        onClick={() => toggleChannel("airBnB", airBnB.status)}
        text="AirBnB"
        disabled={!isActive || airBnB.status === NOT_CONNECTED}
      />
    </div>
    <div className="column">
      <Checkbox
        checked={booking.status === CONNECTED}
        onClick={() => toggleChannel("booking", booking.status)}
        text="Booking"
        disabled={!isActive || booking.status === NOT_CONNECTED}
      />
    </div>
    <div className="column">
      <Checkbox
        checked={avito.status === CONNECTED}
        onClick={() => toggleChannel("avito", avito.status)}
        text="Avito"
        disabled={!isActive || avito.status === NOT_CONNECTED}
      />
    </div>
  </div>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId } } }) => listings[listingId];
const mapDispatchToProps = (dispatch, { match: { params: { listingId } } }) => bindActionCreators(
  {
    getListing: () => getListing(listingId),
    toggleChannel: (channel, status) => toggleChannel(listingId, channel, status),
    toggleActive: (isActive) => toggleActive(listingId, isActive),
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ListingChannels);