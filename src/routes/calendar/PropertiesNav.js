import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ListNavigation from "../../components/ListNavigation";
import { getProperties } from "../../reducers/properties.actions";

const PropertiesNav = ({ properties }) => (
  <nav className="tabs is-boxed is-fullwidth">
    <div className="container">
      <ListNavigation routes={properties.map(property => ({ to: `/calendar/${property.propertyId}`, text: property.address.address }))}/>
    </div>
  </nav>
);

const mapStateToProps = ({ properties }) => ({ properties: Object.values(properties) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getProperties }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertiesNav));