import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import App from './App';
import { clearToken } from "./reducers/apiFactory";
import { getProperties } from "./reducers/properties.actions";

import registerServiceWorker from './registerServiceWorker';

import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers";

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    clearToken();
    state = undefined
  } else if (action.type === "AUTH_LOG_IN") {
    store.dispatch(getProperties());
  }

  return appReducer(state, action)
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware, thunk)));

const loadState = Promise.all([
  store.dispatch(getProperties())
]);

loadState.then(() => {
  ReactDOM.render(
    <Fragment>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer/>
    </Fragment>,
    document.getElementById('root')
  );
});

registerServiceWorker();
