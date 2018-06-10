import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/bookings");

export const getBookings = createAction(
  "BOOKINGS_GET",
  async () => await api.get()
);