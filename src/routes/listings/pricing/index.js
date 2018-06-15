import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingPricingSettings } from "../../../reducers/listings.actions";
import NightlyPrice from "./NightlyPrice";
import LengthOfStayDiscount from "./LengthOfStayDiscount";
import ExtraCharges from "./ExtraCharges";
import Currency from "./Currency";

const ListingPricing = ({ nightlyPrice, discounts, extraCharges, currency }) => (
  <Fragment>
    <h3 className="subtitle has-text-weight-bold">Nightly price</h3>
    <NightlyPrice nightlyPrice={nightlyPrice}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Length-of-stay discounts</h3>
    <LengthOfStayDiscount discounts={discounts}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Extra charges</h3>
    <ExtraCharges extraCharges={extraCharges}/>
    <hr/>
    <h3 className="subtitle has-text-weight-bold">Currency</h3>
    <Currency currency={currency}/>
    <hr/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.pricing`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingPricingSettings: () => getListingPricingSettings(listingId)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getListingPricingSettings }, ListingPricing);