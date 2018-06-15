import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingBookingSettings } from "../../../reducers/listings.actions";
import HowToBook from "./HowToBook";
import GuestRequirement from "./GuestRequirement";
import HouseRules from "./HouseRules";
import Policies from "./Policies";

const ListingBooking = ({ policy, houseRules, guestRequirements, bookingProcess }) => (
  <Fragment>
    <h3 className="subtitle has-text-weight-bold">How guests can book</h3>
    <HowToBook process={bookingProcess}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Guest Requirement</h3>
    <GuestRequirement guestRequirements={guestRequirements}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">House rules</h3>
    <HouseRules houseRules={houseRules}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Policies</h3>
    <Policies policy={policy}/>
    <hr/>
  </Fragment>
);


const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.bookingSettings`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingBookingSettings: () => getListingBookingSettings(listingId)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getListingBookingSettings }, ListingBooking);