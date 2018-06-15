import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { getListingDetails } from "../../../reducers/listings.actions";
import { connectAndLoad } from "../../../components/connectAndLoad";
import ListingAmenities from "./ListingAmenities";
import ListingDescription from "./ListingDescription";
import ListingLocation from "./ListingLocation";
import ListingOverview from "./ListingOverview";
import ListingPhotos from "./ListingPhotos";
import ListingGuestResource from "./LocationGuestResource";

const ListingDetails = ({ photos, description, overview, amenities, address, guestResources }) => (
  <Fragment>
    <h3 className="subtitle has-text-weight-bold">Photos</h3>
    <ListingPhotos photos={photos}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Title & Description</h3>
    <ListingDescription description={description}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Rooms & Guests</h3>
    <ListingOverview overview={overview}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Amenities</h3>
    <ListingAmenities amenities={amenities}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Location</h3>
    <ListingLocation location={address}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Guest Resource</h3>
    <ListingGuestResource guestResources={guestResources}/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.details`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingDetails: () => getListingDetails(listingId)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getListingDetails }, ListingDetails);