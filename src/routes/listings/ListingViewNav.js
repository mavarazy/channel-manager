import React from "react";
import ListNavigation from "../../components/ListNavigation";

const ListingViewNav = ({ match: { params: { listingId } } }) => (
  <div className="tabs is-medium">
    <ListNavigation routes={
      [
        { to: `/listings/${listingId}/details`, text: "Details" },
        { to: `/listings/${listingId}/booking`, text: "Booking settings" },
        { to: `/listings/${listingId}/pricing`, text: "Pricing" },
        { to: `/listings/${listingId}/availability`, text: "Availability" },
      ]
    }
    />
  </div>
);

export default ListingViewNav;