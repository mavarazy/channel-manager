import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { getListingDetails } from "../../../reducers/listings.actions";
import { connectAndLoad } from "../../../components/connectAndLoad";
import ListingPhotos from "./ListingPhotos";

const ListingDetails = ({ photos }) => (
  <Fragment>
    <h3 className="subtitle">Photos</h3>
    <ListingPhotos photos={photos}/>
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