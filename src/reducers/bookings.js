import { handleActions } from "redux-actions";
import { getBookingDetails, getBookings } from "./bookings.actions";
import { produce } from "./produce";

const bookingsReducer = handleActions(
  {
    [getBookings]: produce((draft, { payload: bookings }) => {
      bookings.map((booking) => {
        const { bookingId } = booking;
        draft[bookingId] = Object.assign(booking, draft[bookingId]);
      })
    }),
    [getBookingDetails]: produce((draft, { payload: booking }) => {
      const { bookingId } = booking;
      draft[bookingId] = Object.assign(draft[bookingId] || {}, booking);
    })
  },
  {}
);

export default bookingsReducer;