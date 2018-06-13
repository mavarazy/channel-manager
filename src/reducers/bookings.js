import { handleActions } from "redux-actions";
import { getBookingDetails, getBookings, sendMessage, cancelBooking } from "./bookings.actions";
import { produce } from "./produce";

const bookingsReducer = handleActions(
  {
    [getBookings]: produce((draft, { payload: bookings }) => {
      bookings.forEach((booking) => {
        const { bookingId } = booking;
        draft[bookingId] = Object.assign(booking, draft[bookingId]);
      })
    }),
    [getBookingDetails]: produce((draft, { payload: booking }) => {
      const { bookingId } = booking;
      draft[bookingId] = Object.assign(draft[bookingId] || {}, booking);
    }),
    [sendMessage]: produce((draft, { payload: message, meta: { bookingId }}) => {
      draft[bookingId].messages.push(message);
    }),
    [cancelBooking]: produce((draft, { payload, meta: { bookingId }}) => {
      Object.assign(draft[bookingId], payload);
    })
  },
  {}
);

export default bookingsReducer;