import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import selectn from "selectn";
import { connectAndLoad } from "../../../components/connectAndLoad";
import { getListingPricingSettings, updateNightlyPrice, updateDiscounts, updateExtraCharges, updateCurrency } from "../../../reducers/listings.actions";
import NightlyPrice from "./NightlyPrice";
import LengthOfStayDiscount from "./LengthOfStayDiscount";
import ExtraCharges from "./ExtraCharges";
import Currency from "./Currency";

const ListingPricing = ({ nightlyPrice, discounts, extraCharges, currency, updateNightlyPrice, updateDiscounts, updateExtraCharges, updateCurrency }) => (
  <Fragment>
    <NightlyPrice nightlyPrice={nightlyPrice} onChange={updateNightlyPrice}/>
    <LengthOfStayDiscount discounts={discounts} onChange={updateDiscounts}/>
    <ExtraCharges extraCharges={extraCharges} onChange={updateExtraCharges}/>
    <Currency currency={currency} onChange={updateCurrency}/>
  </Fragment>
);

const mapStateToProps = ({ listings }, { match: { params: { listingId }}}) => selectn(`${listingId}.pricing`, listings);
const mapDispatchToProps = (dispatch, { match: { params: { listingId }}}) => bindActionCreators(
  {
    getListingPricingSettings: () => getListingPricingSettings(listingId),
    updateNightlyPrice: (pricing) => updateNightlyPrice(listingId, pricing),
    updateDiscounts: (discounts) => updateDiscounts(listingId, discounts),
    updateExtraCharges: (extraCharges) => updateExtraCharges(listingId, extraCharges),
    updateCurrency: (currency) => updateCurrency(listingId, currency)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getListingPricingSettings }, ListingPricing);