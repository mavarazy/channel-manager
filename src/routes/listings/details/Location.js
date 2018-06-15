import React from "react";

const Location = ({ location: { country, city, zip, address } }) => (
  <div>
    <h2 className="subtitle is-marginless">Country: {country}</h2>
    <h2 className="subtitle is-marginless">City: {city}</h2>
    <h2 className="subtitle is-marginless">Address: {address}</h2>
    <h2 className="subtitle is-marginless">Zip: {zip}</h2>
  </div>
);

export default Location;