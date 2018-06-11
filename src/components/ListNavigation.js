import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

const ListElement = ({ to, text, exact = false }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <li className={match ? "is-active" : ""}>
      <Link to={to}>{text}</Link>
    </li>
  )}/>
);

const ListNavigation = ({ routes }) => (
  <ul>
    {routes.map((nav, key) => <ListElement key={key} {...nav}/>)}
  </ul>
);

ListNavigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
    exact: PropTypes.bool
  }))
};

export default ListNavigation;