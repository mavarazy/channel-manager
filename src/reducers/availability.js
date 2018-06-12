import { handleActions } from "redux-actions";
import { getAvailability } from "./availability.actions";
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
      const { meta: { propertyId }} = action;
      draft[propertyId] = propertyAvailabilityReducer(draft[propertyId], action)
    }),
  },
  {}
);

export default availabilityReducer;