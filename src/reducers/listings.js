import { handleActions, combineActions } from "redux-actions";
import { connectChannel, disConnectChannel } from "./channels.actions";
import { produce } from "./produce";
import {
  getListings,
  getListingDetails,
  activateListing,
  deActivateListing,
  getListingBookingSettings,
  getListingPricingSettings,
  getListingAvailabilitySettings,
  getListing,
  enableListingChannel,
  disableListingChannel, CONNECTED, NOT_CONNECTED, DISABLED, updateBookingProcess
} from "./listings.actions";

const bookingReducer = handleActions(
  {
    [updateBookingProcess]: produce((draft, { meta: { process }}) => {
      draft.process = process;
    }),
    [getListingBookingSettings]: produce((draft, { payload }) => {
      Object.assign(draft, payload);
    })
  },
  {}
);

const listingReducer = handleActions(
  {
    [getListingDetails]: produce((draft, { payload: details }) => {
      draft.details = details;
    }),
    [getListing]: produce((draft, { payload: listing }) => {
      Object.assign(draft, listing);
    }),
    [activateListing]: produce((draft) => {
      draft.isActive = true;
    }),
    [deActivateListing]: produce((draft) => {
      draft.isActive = false;
    }),
    [combineActions(getListingBookingSettings, updateBookingProcess)]: produce((draft, action) => {
      draft.bookingSettings = bookingReducer(draft.bookingSettings, action);
    }),
    [getListingPricingSettings]: produce((draft, { payload: pricing }) => {
      draft.pricing = pricing;
    }),
    [getListingAvailabilitySettings]: produce((draft, { payload: availability }) => {
      draft.availability = availability;
    }),
    [enableListingChannel]: produce((draft, { payload, meta: { listingId, channel }}) => {
      draft.channels[channel].status = CONNECTED;
    }),
    [disableListingChannel]: produce((draft, { payload, meta: { listingId, channel }}) => {
      draft.channels[channel].status = DISABLED;
    })
  },
  {
    bookingSettings: {}
  }
);

export const listingsReducer = handleActions(
  {
    [getListings]: produce((draft, { payload: listings }) => {
      listings.forEach((listing) => {
        const { listingId } = listing;
        draft[listingId] = Object.assign(draft[listingId] ||{}, listing);
      })
    }),
    [disConnectChannel]: produce((draft, { meta: { channel }}) => {
      Object.values(draft).forEach(val => val.channels[channel].status = NOT_CONNECTED)
    }),
    [connectChannel]: produce((draft, { meta: { channel }}) => {
      Object.values(draft).forEach(val => val.channels[channel].status = DISABLED)
    }),
    [combineActions(getListing, enableListingChannel, disableListingChannel, getListingDetails, activateListing, deActivateListing, getListingBookingSettings, getListingPricingSettings, getListingAvailabilitySettings, updateBookingProcess)]: produce((draft, action) => {
      const { meta: { listingId }} = action;
      draft[listingId] = listingReducer(draft[listingId], action);
    }),
  },
  {}
);