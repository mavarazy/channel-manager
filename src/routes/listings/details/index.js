import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { getListingDetails, updateGuestResources } from "../../../reducers/listings.actions";
import { connectAndLoad } from "../../../components/connectAndLoad";
import Amenities from "./Amenities";
import Description from "./Description";
import Location from "./Location";
import Overview from "./Overview";
import Photos from "./Photos";
import GuestResource from "./GuestResource";

const ListingDetails = ({ photos, description, overview, amenities, address, guestResources, updateGuestResources }) => (
  <Fragment>
    <h3 className="subtitle has-text-weight-bold">Photos</h3>
    <Photos photos={photos}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Title & Description</h3>
    <Description description={description}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Rooms & Guests</h3>
    <Overview overview={overview}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Amenities</h3>
    <Amenities amenities={amenities}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Location</h3>
    <Location location={address}/>
    <hr/>
    <GuestResource guestResources={guestResources} onChange={updateGuestResources}/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.details`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingDetails: () => getListingDetails(listingId),
    updateGuestResources: (resources) => updateGuestResources(listingId, resources),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingDetails }, ListingDetails);