import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./auth";
import { availabilityReducer } from "./availability";
import { bookingsReducer } from "./bookings";
import { channelsReducer } from "./channels";
import { listingsReducer } from "./listings";
import { reportsReducer } from "./reports";
import { tasksReducer } from "./tasks";

const reducers = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  bookings: bookingsReducer,
  listings: listingsReducer,
  availability: availabilityReducer,
  reports: reportsReducer,
  channels: channelsReducer,
  form: formReducer
});

export default reducers;