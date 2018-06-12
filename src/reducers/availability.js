import { handleActions, combineActions } from "redux-actions";
import { getAvailability, releaseDates, lockDates } from "./availability.actions";
import { produce } from "./produce";

const propertyAvailabilityReducer = handleActions(
  {
    [getAvailability]: produce((draft, { payload: propertyState }) => {
      propertyState.forEach(propertyState => {
        const { date } = propertyState;
        draft[date] = propertyState
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
      const { meta: { propertyId }} = action;
      draft[propertyId] = propertyAvailabilityReducer(draft[propertyId], action)
    }),
  },
  {}
);

export default availabilityReducer;