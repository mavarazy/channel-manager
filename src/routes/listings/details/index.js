import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { getListingDetails, updateGuestResources, updateDescription, updateOverview, updateAmenities, updateLocation } from "../../../reducers/listings.actions";
import { connectAndLoad } from "../../../components/connectAndLoad";
import Amenities from "./Amenities";
import Description from "./Description";
import Location from "./Location";
import Overview from "./Overview";
import Photos from "./Photos";
import GuestResource from "./GuestResource";

const ListingDetails = ({ details: { photos, description, overview, amenities, location, guestResources }, updateGuestResources, updateDescription, updateOverview, updateAmenities, updateLocation }) => (
  <Fragment>
    <Photos photos={photos}/>
    <Location location={location} onChange={updateLocation}/>
    <Description description={description} onChange={updateDescription}/>
    <Overview overview={overview} onChange={updateOverview}/>
    <Amenities amenities={amenities} onChange={updateAmenities}/>
    <GuestResource guestResources={guestResources} onChange={updateGuestResources}/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => ({ details: selectn(`${listingId}.details`, listings) });
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingDetails: () => getListingDetails(listingId),
    updateGuestResources: (resources) => updateGuestResources(listingId, resources),
    updateDescription: (description) => updateDescription(listingId, description),
    updateOverview: (overview) => updateOverview(listingId, overview),
    updateAmenities: (amenities) => updateAmenities(listingId, amenities),
    updateLocation: (location) => updateLocation(listingId, location),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingDetails }, ListingDetails);