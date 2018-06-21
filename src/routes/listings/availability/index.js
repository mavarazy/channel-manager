import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingAvailabilitySettings, updateReservationPreferences, updateTripLength, updatePolicy } from "../../../reducers/listings.actions";
import CheckInAndOut from "./CheckInAndOut";
import ReservationPreferences from "./ReservationPreferences";
import TripLength from "./TripLength";

const ListingAvailability = ({ reservationPreferences, tripLength, policy, updateReservationPreferences, updateTripLength, updatePolicy }) => (
  <Fragment>
    <ReservationPreferences {...reservationPreferences} onChange={updateReservationPreferences}/>
    <TripLength {...tripLength} onChange={updateTripLength}/>
    <CheckInAndOut {...policy} onChange={updatePolicy}/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.availability`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingAvailabilitySettings: () => getListingAvailabilitySettings(listingId),
    updateReservationPreferences: (prefs) => updateReservationPreferences(listingId, prefs),
    updateTripLength: (trip) => updateTripLength(listingId, trip),
    updatePolicy: (policy) => updatePolicy(listingId, policy)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingAvailabilitySettings }, ListingAvailability);