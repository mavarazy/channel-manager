import React from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/Loading";
import { getBookings } from "../../reducers/bookings.actions";

const BookingDate = ({ date }) => {
  const dateMoment = moment(date, "YYYYMMDD");
  return (
    <span>{dateMoment.format("DD")} {dateMoment.format("MMM")}</span>
  );
};

const BookingRow = ({ reservationId, checkIn, checkOut, status, channel, guest, guestCountry, propertyId, inbox }) => (
  <tr>
    <td>{reservationId}</td>
    <td>
      <BookingDate date={checkIn}/>/<br/>
      <BookingDate date={checkOut}/>
    </td>
    <td>{status}</td>
    <td>{channel}</td>
    <td>
      {guest}<br/>
      {guestCountry}
    </td>
    <td>{propertyId}</td>
    <td>{inbox}</td>

  </tr>
);

const BookingTable = ({ bookings }) => (
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
    {bookings.map((booking, i) => <BookingRow key={i} {...booking}/>)}
    </tbody>
  </table>
);

const Bookings = ({ bookings }) => (
  <BookingTable bookings={bookings}/>
);

const mapStateToProps = ({ bookings }) => ({ bookings: Object.values(bookings) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getBookings }, dispatch);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getBookings }, Bookings);