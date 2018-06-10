import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/bookings");

export const getBookings = createAction(
  "BOOKINGS_GET",
  async () => await api.get()
);

export const getBookingDetails = createAction(
  "BOOKINGS_GET_DETAILS",
  async (bookingId) => await api.get(bookingId),
  (id) => ({ id })
);

export const sendMessage = createAction(
  "BOOKINGS_SEND_MESSAGE",
  async (bookingId, message) => await api.post(`${bookingId}/messages`, message),
  (bookingId) => ({ bookingId })
);
