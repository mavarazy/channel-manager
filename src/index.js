import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
