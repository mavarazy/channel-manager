import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import availabilityReducer from "./availability";
import bookingsReducer from "./bookings";
import listingsReducer from "./listings";
import reportsReducer from "./reports";
import statusReducer from "./status";

const reducers = combineReducers({
  auth: authReducer,
  status: statusReducer,
  bookings: bookingsReducer,
  listings: listingsReducer,
  availability: availabilityReducer,
  reports: reportsReducer,
  form: formReducer
});

export default reducers;