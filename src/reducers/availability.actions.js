import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/availability");

export const getAvailability = createAction(
  "AVAILABILITY_GET",
  async (propertyId) => await api.get(propertyId),
  (propertyId) => ({ propertyId })
);

export const lockDates = createAction(
  "AVAILABILITY_LOCK",
  async (propertyId, fromTo) => await api.post(`${propertyId}/lock`, fromTo),
  (propertyId, fromTo) => ({ propertyId, fromTo })
);

export const releaseDates = createAction(
  "AVAILABILITY_UNLOCK",
  async (propertyId, fromTo) => await api.post(`${propertyId}/unlock`, fromTo),
  (propertyId, fromTo) => ({ propertyId, fromTo })
);