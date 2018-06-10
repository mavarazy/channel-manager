import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookingsReducer from "./bookings";
import propertiesReducer from "./properties";

const reducers = combineReducers({
  bookings: bookingsReducer,
  properties: propertiesReducer,
  form: formReducer
});

export default reducers;