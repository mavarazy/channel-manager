import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getProperties } from "../../reducers/properties.actions";

const PropertiesDropdown = ({ properties, match: { params: { propertyId } } }) => (
  <div className="control is-expanded">
    <div className="dropdown is-hoverable is-rounded">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{propertyId ? properties.find(pr => pr.propertyId === propertyId).address.address : "Select property"}</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {properties.map(({ propertyId, address: { address } }) => (
            <NavLink key={propertyId} activeClassName="is-active" className="dropdown-item"
                     to={`/calendar/${propertyId}`}>
              {address}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ properties }) => ({ properties: Object.values(properties) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getProperties }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertiesDropdown));