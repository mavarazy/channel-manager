import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/properties");

export const getProperties = createAction(
  "PROPERTIES_GET",
  async () => await api.get()
);

export const getPropertyDetails = createAction(
  "PROPERTIES_GET_DETAILS",
  async (bookingId) => await api.get(bookingId),
  (id) => ({ id })
);