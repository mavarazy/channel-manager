import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/availability");

export const getAvailability = createAction(
  "AVAILABILITY_GET",
  async (listingId) => await api.get(listingId),
  (listingId) => ({ listingId })
);

export const lockDates = createAction(
  "AVAILABILITY_LOCK",
  async (listingId, fromTo) => await api.post(`${listingId}/lock`, fromTo),
  (listingId, fromTo) => ({ listingId, fromTo })
);

export const releaseDates = createAction(
  "AVAILABILITY_UNLOCK",
  async (listingId, fromTo) => await api.post(`${listingId}/unlock`, fromTo),
  (listingId, fromTo) => ({ listingId, fromTo })
);