import React, { Fragment } from "react";

const NightlyPrice = ({ nightlyPrice: { smartPricing, minPrice, maxPrice }}) => (
  <Fragment>
    <h1 className="subtitle is-marginless">Smart Pricing <strong className={smartPricing ? "has-text-success": "has-text-grey"}>{smartPricing ? "On" : "Off"}</strong></h1>
    <h1 className="subtitle is-marginless">Min Price <strong>{minPrice}</strong></h1>
    <h1 className="subtitle is-marginless">Max Price <strong>{maxPrice}</strong></h1>
  </Fragment>
);

export default NightlyPrice;