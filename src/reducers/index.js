import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import availabilityReducer from "./availability";
import bookingsReducer from "./bookings";
import listingsReducer from "./listings";
import reportsReducer from "./reports";
import tasksReducer from "./tasks";

const reducers = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  bookings: bookingsReducer,
  listings: listingsReducer,
  availability: availabilityReducer,
  reports: reportsReducer,
  form: formReducer
});

export default reducers;