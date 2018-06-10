import React from "react";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getProperties } from "../../reducers/properties.actions";

const PropertyRow = ({ reservationId, checkIn, checkOut, status, channel, guest, guestCountry, propertyId, inbox }) => (
  <tr>
    <td>{reservationId}</td>
    <td>{status}</td>
    <td>{channel}</td>
    <td>
      {guest}<br/>
      {guestCountry}
    </td>
    <td>{propertyId}</td>
  </tr>
);


// {
//   propertyId: '1',
//     address: {
//   city: 'Saint Petersburg',
//     country: 'Russia',
//     address: 'Pulkovskaia 6, building 2, flat 393'
// },
//   price: 30,
//     channels: {
//   airBnb: {
//     link: 'https://airbnb.com/property/823',
//       lastUpdated: '20180101',
//       status: 'upToDate'
//   },
//   booking: {
//     link: 'https://booking.com/property/123',
//       lastUpdated: '20180102',
//       status: 'upToDate'
//   },
//   avito: {
//     status: 'notConnected'
//   }
// },
//   isActive: true
// }

const PropertiesTable = ({ properties }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th>Relevant Booking</th>
      <th>Dates</th>
      <th>Status</th>
      <th>Channel</th>
      <th>Guest</th>
      <th>Property</th>
      <th>Inbox</th>
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