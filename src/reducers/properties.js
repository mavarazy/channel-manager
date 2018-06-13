import { handleActions } from "redux-actions";
import { produce } from "./produce";
import { getProperties, getPropertyDetails } from "./properties.actions";

const propertiesReducer = handleActions(
  {
    [getProperties]: produce((draft, { payload: properties }) => {
      properties.forEach((property) => {
        const { propertyId } = property;
        draft[propertyId] = Object.assign(draft[propertyId] ||{}, property);
      })
    }),
    [getPropertyDetails]: produce((draft, { payload: property }) => {
      const { propertyId } = property;
      draft[propertyId] = Object.assign(draft[propertyId] || {}, property);
    }),
  },
  {}
);

export default propertiesReducer;