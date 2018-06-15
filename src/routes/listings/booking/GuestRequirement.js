import React, { Fragment } from "react";
import Statement from "./Statement";

const GuestRequirement = ({ guestRequirements: { standard, governmentId, recommendations, tripInfo } }) => (
  <Fragment>
    <Statement isTrue={standard}>
      Standard Platform requirements
    </Statement>
    <Statement isTrue={governmentId}>
      {governmentId ? "Government-issues ID" : "No government-issued ID verification required" }
    </Statement>
    <Statement isTrue={recommendations}>
      {recommendations ? "Recommendation from other hosts" : "No recommendation from other hosts needed" }
    </Statement>
    <Statement isTrue={tripInfo}>
      {tripInfo ? "Guest trip information" : "No guest trip info needed"}
    </Statement>
  </Fragment>
);

export default GuestRequirement;