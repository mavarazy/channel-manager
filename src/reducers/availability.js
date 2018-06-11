import { handleActions } from "redux-actions";
import { getAvailability } from "./availability.actions";
import { getBookingDetails, getBookings, sendMessage } from "./bookings.actions";
import { produce } from "./produce";

const propertyAvailabilityReducer = handleActions(
  {
    [getAvailability]: produce((draft, { payload: propertyState }) => {
      propertyState.forEach(propertyState => {
        const { date } = propertyState;
        draft[date] = propertyState
      })
    })
  },
  {}
);

const availabilityReducer = handleActions(
  {
    [getAvailability]: produce((draft, action) => {
      draft[action.propertyId] = propertyAvailabilityReducer(draft[action.propertyId], action)
    }),
  },
  {}
);

export default availabilityReducer;