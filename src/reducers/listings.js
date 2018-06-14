import { handleActions, combineActions } from "redux-actions";
import { produce } from "./produce";
import { getListings, getListingDetails, activateListing, deActivateListing } from "./listings.actions";

const listingReducer = handleActions(
  {
    [getListingDetails]: produce((draft, { payload: details }) => {
      draft.details = details;
    }),
    [activateListing]: produce((draft) => {
      draft.isActive = true;
    }),
    [deActivateListing]: produce((draft) => {
      draft.isActive = false;
    }),
  },
  {}
);

const listingsReducer = handleActions(
  {
    [getListings]: produce((draft, { payload: listings }) => {
      listings.forEach((listing) => {
        const { listingId } = listing;
        draft[listingId] = Object.assign(draft[listingId] ||{}, listing);
      })
    }),
    [combineActions(getListingDetails, activateListing, deActivateListing)]: produce((draft, action) => {
      const { meta: { listingId }} = action;
      draft[listingId] = listingReducer(draft[listingId], action);
    }),
  },
  {}
);

export default listingsReducer;