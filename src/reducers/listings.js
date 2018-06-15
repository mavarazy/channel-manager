import { handleActions, combineActions } from "redux-actions";
import { produce } from "./produce";
import {
  getListings,
  getListingDetails,
  activateListing,
  deActivateListing,
  getListingBookingSettings,
  getListingPricingSettings, getListingAvailabilitySettings
} from "./listings.actions";

const listingReducer = handleActions(
  {
    [getListingDetails]: produce((draft, { payload: details }) => {
      draft.details = details;
    }),
    [activateListing]: produce((draft) => {
      draft.isActive = true;
    }),
    [deActivateListing]: produce((draft) => {
      draft.isActive = false;
    }),
    [getListingBookingSettings]: produce((draft, { payload: bookingSettings }) => {
      draft.bookingSettings = bookingSettings;
    }),
    [getListingPricingSettings]: produce((draft, { payload: pricing }) => {
      draft.pricing = pricing;
    }),
    [getListingAvailabilitySettings]: produce((draft, { payload: availability }) => {
      draft.availability = availability;
    }),
  },
  {}
);

const listingsReducer = handleActions(
  {
    [getListings]: produce((draft, { payload: listings }) => {
      listings.forEach((listing) => {
        const { listingId } = listing;
        draft[listingId] = Object.assign(draft[listingId] ||{}, listing);
      })
    }),
    [combineActions(getListingDetails, activateListing, deActivateListing, getListingBookingSettings, getListingPricingSettings, getListingAvailabilitySettings)]: produce((draft, action) => {
      const { meta: { listingId }} = action;
      draft[listingId] = listingReducer(draft[listingId], action);
    }),
  },
  {}
);

export default listingsReducer;