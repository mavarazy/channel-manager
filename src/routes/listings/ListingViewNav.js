import React from "react";
import ListNavigation from "../../components/ListNavigation";

const ListingViewNav = ({ match: { params: { listingId } } }) => (
  <div className="tabs is-medium">
    <ul>
      <ListNavigation routes={
        [
          { to: `/listings/${listingId}/details`, text: "Details" },
          { to: `/listings/${listingId}/booking`, text: "Booking settings" },
          { to: `/listings/${listingId}/pricing`, text: "Pricing" },
          { to: `/listings/${listingId}/availability`, text: "Availability" },
        ]
      }
      />
    </ul>
  </div>
);

export default ListingViewNav;