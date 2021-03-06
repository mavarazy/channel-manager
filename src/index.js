import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { handleActions, combineActions } from "redux-actions";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

import App from './App';
import './index.css';
import appReducer from "./reducers";
import { login, logout, register } from "./reducers/auth.actions";
import { getListings } from "./reducers/listings.actions";
import { getTasks } from "./reducers/tasks.actions";

import registerServiceWorker from './registerServiceWorker';

const loader = handleActions(
  {
    [combineActions(login, register)]: (state) => {
      store.dispatch(getListings());
      store.dispatch(getTasks());
      return state;
    },
    [logout]: () => undefined,
  },
  {}
);

const rootReducer = (state, action) => appReducer(loader(state, action), action);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware, thunk)));

const loadingTask = store.getState().auth.isAuthenticated
  ? Promise.all([store.dispatch(getListings()), store.dispatch(getTasks())]).catch(() => Promise.resolve(false))
  : Promise.resolve(true);

loadingTask.then(() => {
  ReactDOM.render(
    <Fragment>
      <ToastContainer/>
      <Provider store={store}>
        <App/>
      </Provider>
    </Fragment>,
    document.getElementById('root')
  );
});


registerServiceWorker();
