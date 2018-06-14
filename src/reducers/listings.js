import { handleActions } from "redux-actions";
import { produce } from "./produce";
import { getListings, getListingDetails } from "./listings.actions";

const listingsReducer = handleActions(
  {
    [getListings]: produce((draft, { payload: listings }) => {
      listings.forEach((listing) => {
        const { listingId } = listing;
        draft[listingId] = Object.assign(draft[listingId] ||{}, listing);
      })
    }),
    [getListingDetails]: produce((draft, { payload: listing }) => {
      const { listingId } = listing;
      draft[listingId] = Object.assign(draft[listingId] || {}, listing);
    }),
  },
  {}
);

export default listingsReducer;