import React from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getBookings } from "../../reducers/bookings.actions";

import { faEye } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const BookingDate = ({ date }) => {
  const dateMoment = moment(date, "YYYYMMDD");
  return (
    <span>{dateMoment.format("DD")} {dateMoment.format("MMM")}</span>
  );
};

const BookingRow = ({ bookingId, reservationId, checkIn, checkOut, status, paymentStatus, channel, guest, guestCountry, listing, inbox }) => (
  <tr>
    <td>
      <Link to={`/bookings/${bookingId}`}>
        <span className="icon">
          <FontAwesomeIcon icon={faEye}/>
        </span>
      </Link><br/>
      <small>inbox <strong>{inbox}</strong></small>
    </td>
    <td>
      <BookingDate date={checkIn}/><br/>
      <BookingDate date={checkOut}/>
    </td>
    <td>
      {channel}<br/>
      {reservationId}
    </td>
    <td>
      {status}<br/>
      {paymentStatus}
    </td>
    <td>
      {guest}<br/>
      {guestCountry}
    </td>
    <td>{listing.address.address}</td>
  </tr>
);

const BookingTable = ({ bookings }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th></th>
      <th>Dates</th>
      <th>Booking</th>
      <th>Status</th>
      <th>Guest</th>
      <th>Listing</th>
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