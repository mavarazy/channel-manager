import React from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getBookings } from "../../reducers/bookings.actions";

const BookingDate = ({ date }) => {
  const dateMoment = moment(date, "YYYYMMDD");
  return (
    <span>{dateMoment.format("DD")} {dateMoment.format("MMM")}</span>
  );
};

const BookingRow = ({ bookingId, reservationId, checkIn, checkOut, status, channel, guest, guestCountry, propertyId, inbox }) => (
  <tr>
    <td>
      {channel}<br/>
      {reservationId}
    </td>
    <td>
      <BookingDate date={checkIn}/>&nbsp;/<br/>
      <BookingDate date={checkOut}/>
    </td>
    <td>{status}</td>
    <td>
      {guest}<br/>
      {guestCountry}
    </td>
    <td>{propertyId}</td>
    <td><Link to={`/bookings/${bookingId}`}>{inbox}</Link></td>
  </tr>
);

const BookingTable = ({ bookings }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th>Relevant Booking</th>
      <th>Dates</th>
      <th>Status</th>
      <th>Guest</th>
      <th>Property</th>
      <th>Inbox</th>
    </tr>
    </thead>
    <tbody>
    {bookings.map((booking) => <BookingRow key={booking.bookingId} {...booking}/>)}
    </tbody>
  </table>
);

const Bookings = ({ bookings }) => (
  <BookingTable bookings={bookings}/>
);

const mapStateToProps = ({ bookings }) => ({ bookings: Object.values(bookings) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getBookings }, dispatch);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getBookings }, Bookings);