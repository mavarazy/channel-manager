import React, { Fragment } from "react";
import ValueStatement from "../ValueStatement";

const NightlyPrice = ({ nightlyPrice: { smartPricing, minPrice, maxPrice }}) => (
  <Fragment>
    <ValueStatement value={smartPricing ? "On" : "Off"}>Smart Pricing</ValueStatement>
    <hr/>
    <ValueStatement value={minPrice}>Min Price</ValueStatement>
    <hr/>
    <ValueStatement value={maxPrice}>Max Price</ValueStatement>
  </Fragment>
);

export default NightlyPrice;