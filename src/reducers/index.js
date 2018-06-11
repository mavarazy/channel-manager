import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import availabilityReducer from "./availability";
import bookingsReducer from "./bookings";
import propertiesReducer from "./properties";

const reducers = combineReducers({
  bookings: bookingsReducer,
  properties: propertiesReducer,
  availability: availabilityReducer,
  form: formReducer
});

export default reducers;