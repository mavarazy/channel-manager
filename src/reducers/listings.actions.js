import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/listings");

export const getListings = createAction(
  "LISTING_GET",
  async () => await api.get()
);

export const getListingDetails = createAction(
  "LISTING_GET_DETAILS",
  async (listingId) => await api.get(`${listingId}/details`),
  (listingId) => ({ listingId })
);

export const activateListing = createAction(
  "LISTING_TOGGLE_ACTIVATE",
  async (listingId) => await api.post(`${listingId}/activate`),
  (listingId) => ({ listingId })
);

export const deActivateListing = createAction(
  "LISTING_TOGGLE_DEACTIVATE",
  async (listingId) => await api.post(`${listingId}/deactivate`),
  (listingId) => ({ listingId })
);