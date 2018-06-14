import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/listings");

export const getListings = createAction(
  "LISTING_GET",
  async () => await api.get()
);

export const getListingDetails = createAction(
  "LISTING_GET_DETAILS",
  async (bookingId) => await api.get(bookingId),
  (id) => ({ id })
);