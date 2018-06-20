import React from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingBookingSettings, updateBookingProcess } from "../../../reducers/listings.actions";
import GuestRequirement from "./GuestRequirement";
import HouseRules from "./HouseRules";
import HowToBook from "./HowToBook";
import Policies from "./Policies";

const ListingBooking = ({ policy, houseRules, guestRequirements, process, updateBookingProcess }) => (
  <div className="columns">
    <div className="column is-8">
      <HowToBook process={process} onChange={updateBookingProcess}/>
      <h3 className="subtitle has-text-weight-bold">Guest Requirement</h3>
      <GuestRequirement guestRequirements={guestRequirements}/>
      <hr/>
      <h3 className="subtitle has-text-weight-bold">House rules</h3>
      <HouseRules houseRules={houseRules}/>
      <hr/>
      <h3 className="subtitle has-text-weight-bold">Policies</h3>
      <Policies policy={policy}/>
      <hr/>
    </div>
  </div>
);


const mapStateToProps = ({ listings }, { match: { params: { listingId } } }) => selectn(`${listingId}.bookingSettings`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId } } }) => bindActionCreators(
  {
    getListingBookingSettings: () => getListingBookingSettings(listingId),
    updateBookingProcess: (process) => updateBookingProcess(listingId, process),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingBookingSettings }, ListingBooking);