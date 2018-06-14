import { handleActions, combineActions } from "redux-actions";
import { getAvailability, releaseDates, lockDates } from "./availability.actions";
import { produce } from "./produce";

const listingAvailabilityReducer = handleActions(
  {
    [getAvailability]: produce((draft, { payload: listingAvailability }) => {
      listingAvailability.forEach(availability => {
        const { date } = availability;
        draft[date] = availability
      })
    }),
    [releaseDates]: produce((draft, { meta: { fromTo: { from, to }} }) => {
      draft[from].status = "available";

    }),
    [lockDates]: produce((draft, { meta: { fromTo: { from, to }} }) => {
      draft[from].status = "blocked";
    }),
  },
  {}
);

const availabilityReducer = handleActions(
  {
    [combineActions(getAvailability, releaseDates, lockDates)]: produce((draft, action) => {
      const { meta: { listingId }} = action;
      draft[listingId] = listingAvailabilityReducer(draft[listingId], action)
    }),
  },
  {}
);

export default availabilityReducer;