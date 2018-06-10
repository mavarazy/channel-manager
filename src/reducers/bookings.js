import { handleActions } from "redux-actions";
import { getBookings } from "./bookings.actions";
import { produce } from "./produce";

const bookingsReducer = handleActions(
  {
    [getBookings]: produce((draft, { payload: bookings }) => {
      bookings.map((booking) => {
        const { bookingId: id } = booking;
        draft[id] = Object.assign({ id }, booking, draft[id]);
      })
    })
  },
  {}
);

export default bookingsReducer;