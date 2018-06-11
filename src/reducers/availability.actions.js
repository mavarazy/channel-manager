import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/availability");

export const getAvailability = createAction(
  "AVAILABILITY_GET",
  async (propertyId) => await api.get(propertyId),
  (propertyId) => ({ propertyId })
);