import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingBookingSettings, updateBookingProcess, updateGuestRequirements, updateHouseRules } from "../../../reducers/listings.actions";
import GuestRequirement from "./GuestRequirement";
import HouseRules from "./HouseRules";
import HowToBook from "./HowToBook";

const ListingBooking = ({ houseRules, guestRequirements, process, updateBookingProcess, updateGuestRequirements, updateHouseRules }) => (
  <Fragment>
    <HowToBook process={process} onChange={updateBookingProcess}/>
    <GuestRequirement guestRequirements={guestRequirements} onChange={updateGuestRequirements}/>
    <HouseRules houseRules={houseRules} onChange={updateHouseRules}/>
  </Fragment>
);


const mapStateToProps = ({ listings }, { match: { params: { listingId } } }) => selectn(`${listingId}.bookingSettings`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId } } }) => bindActionCreators(
  {
    getListingBookingSettings: () => getListingBookingSettings(listingId),
    updateBookingProcess: (process) => updateBookingProcess(listingId, process),
    updateGuestRequirements: (requirements) => updateGuestRequirements(listingId, requirements),
    updateHouseRules: (houseRules) => updateHouseRules(listingId, houseRules)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingBookingSettings }, ListingBooking);