import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingAvailabilitySettings, updateReservationPreferences } from "../../../reducers/listings.actions";
import CheckInAndOut from "./CheckInAndOut";
import ReservationPreferences from "./ReservationPreferences";
import TripLength from "./TripLength";

const ListingAvailability = ({ reservationPreferences, tripLength, policy, updateReservationPreferences }) => (
  <Fragment>
    <ReservationPreferences {...reservationPreferences} onChange={updateReservationPreferences}/>
    <h1 className="subtitle has-text-weight-bold">Trip length</h1>
    <TripLength {...tripLength}/>
    <hr/>
    <h1 className="subtitle has-text-weight-bold">Check-in and checkout</h1>
    <CheckInAndOut {...policy}/>
    <hr/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.availability`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingAvailabilitySettings: () => getListingAvailabilitySettings(listingId),
    updateReservationPreferences: (prefs) => updateReservationPreferences(listingId, prefs),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingAvailabilitySettings }, ListingAvailability);