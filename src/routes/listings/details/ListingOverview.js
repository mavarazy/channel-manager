import React from "react";

const ListingOverview = ({ overview: { accommodates, bathrooms, bedrooms, beds, propertyType, roomType } }) => (
  <div className="columns">
    <div className="column">
      <h5 className="subtitle is-marginless">Accommodates: {accommodates}</h5>
      <h5 className="subtitle is-marginless">Bathrooms: {bathrooms}</h5>
      <h5 className="subtitle is-marginless">Bedrooms: {bedrooms}</h5>
    </div>
    <div className="column">
      <h5 className="subtitle is-marginless">Beds: {beds}</h5>
      <h5 className="subtitle is-marginless">Property type: {propertyType}</h5>
      <h5 className="subtitle is-marginless">Room type: {roomType}</h5>
    </div>
    <div className="column">
    </div>
  </div>
);

export default ListingOverview;

