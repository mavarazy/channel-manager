import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookingsReducer from "./bookings";

const reducers = combineReducers({
  bookings: bookingsReducer,
  form: formReducer
});

export default reducers;