import React, { Fragment } from "react";
import moment from "moment";

const BookingDate = ({ date }) => {
  const dateMoment = moment(date, "YYYYMMDD");
  return (
    <span>{dateMoment.format("DD")} {dateMoment.format("MMM")}</span>
  );
};

const BookingReportRow = ({ bookingId, reservationId, checkIn, checkOut, status, paymentStatus, channel, guest, guestCountry, listing }) => (
  <tr>
    <td>
      <BookingDate date={checkIn}/><br/>
      <BookingDate date={checkOut}/>
    </td>
    <td>
      {channel}<br/>
      {reservationId}
    </td>
    <td>
      {guest}<br/>
      {guestCountry}
    </td>
    <td>{listing.address.address}</td>
  </tr>
);

const BookingReportTable = ({ bookings }) => (
  <table className="table has-text-centered is-fullwidth">
    <thead>
    <tr>
      <th>Dates</th>
      <th>Booking</th>
      <th>Guest</th>
      <th>Listing</th>
    </tr>
    </thead>
    <tbody>
    {bookings.map((booking) => <BookingReportRow key={booking.bookingId} {...booking}/>)}
    </tbody>
  </table>
);

const BookingsReport = ({ bookings }) => (
  <Fragment>
    <h4 className="title">Bookings</h4>
    <BookingReportTable bookings={bookings}/>
  </Fragment>
);

export default BookingsReport;