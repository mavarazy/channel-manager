import React from "react";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getProperties } from "../../reducers/properties.actions";

const PropertyChannelStatus = ({ status, link }) => {
  if (status === "notConnected") {
    return (
      <span>Not&nbsp;Connected</span>
    )
  } else {
    return (
      <a href={link}>{link}</a>
    );
  }
};

const PropertyRow = ({ propertyId, address, channels: { airBnB, booking, avito }, isActive }) => (
  <tr>
    <td>{address.address}</td>
    <td><PropertyChannelStatus {...airBnB}/></td>
    <td><PropertyChannelStatus {...booking}/></td>
    <td><PropertyChannelStatus {...avito}/></td>
    <td>
      <div className="control">
        <label className="checkbox" disabled>
          <input type="checkbox" checked={isActive} disabled/>
          Active
        </label>
      </div>
    </td>
  </tr>
);

const PropertiesTable = ({ properties }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th>Address</th>
      <th>AirBnB</th>
      <th>Booking</th>
      <th>Avito</th>
      <th>Active</th>
    </tr>
    </thead>
    <tbody>
    {properties.map(property => <PropertyRow key={property.propertyId} {...property}/>)}
    </tbody>
  </table>
);

const Properties = ({ properties }) => (
  <PropertiesTable properties={properties}/>
);

const mapStateToProps = ({ properties }) => ({ properties: Object.values(properties) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getProperties }, dispatch);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getProperties }, Properties);