import React from "react";

const ListingGuestResource = ({ guestResources: { wifi, wifiPassword } }) => (
  <div>
    <h2 className="subtitle is-marginless">Wifi: {wifi}</h2>
    <h2 className="subtitle is-marginless">Password: {wifiPassword}</h2>
  </div>
);

export default ListingGuestResource;