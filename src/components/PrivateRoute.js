import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const shouldRender = (auth) => auth.isAuthenticated === true;

const PrivateRouteView = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => shouldRender(auth) ? (<Component {...props} />) : (<Redirect to={{ "pathname": "/auth",  state: { from: props.location } } }/>)}
  />
);

const mapStateToProps = ({ auth }) => ({ auth });

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteView);