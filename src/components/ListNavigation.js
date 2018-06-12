import cx from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const ListElement = ({ to, text, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <li className={cx({ "is-active": match })}>
      <Link to={to}>{text} </Link>
    </li>
  )}/>
);

class ListNavigation extends Component {

  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string,
      exact: PropTypes.bool
    }))
  };

  render() {
    return (
      <ul>
        {this.props.routes.map((nav, key) => <ListElement key={key} {...nav}/>)}
      </ul>
    )
  }

}

export default ListNavigation;