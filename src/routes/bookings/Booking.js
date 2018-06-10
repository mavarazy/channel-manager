import moment from "moment";
import React, { Fragment } from "react";
import Gravatar from 'react-gravatar'
import { getBookingDetails } from "reducers/bookings.actions";
import cx from "classnames";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/Loading";

const GuestDescription = ({ guest, guestCountry, contact: { email } }) => (
  <Fragment>
    <Gravatar email={email} size={150}/>
    <h3 className="title">Guest</h3>
    <h4 className="subtitle">{guest}</h4>
    <h3 className="title">Guest Country</h3>
    <h4 className="subtitle">{guestCountry}</h4>
  </Fragment>
)

const BookingDates = ({ checkIn, checkOut }) => (
  <Fragment>
    <h3 className="title">Check In</h3>
    <h4 className="subtitle">{moment(checkIn, "YYYYMMDD").format("DD - MMM - YYYY")}</h4>
    <h3 className="title">Check Out</h3>
    <h4 className="subtitle">{moment(checkOut, "YYYYMMDD").format("DD - MMM - YYYY")}</h4>
  </Fragment>
);

const BookingDescription = ({ channel, guest, guestCountry, status, paymentStatus }) => (
  <Fragment>
    <h3 className="title">Channel</h3>
    <h4 className="subtitle">{channel}</h4>
    <h3 className="title">Guest</h3>
    <h4 className="subtitle">{guest}</h4>
    <h3 className="title">Guest Country</h3>
    <h4 className="subtitle">{guestCountry}</h4>
    <h3 className="title">Status</h3>
    <h4 className="subtitle">{status}</h4>
    <h3 className="title">Payment Status</h3>
    <h4 className="subtitle">{paymentStatus}</h4>
  </Fragment>
);

const BookingContact = ({ contact: { phone, email, vk, fb, telegram, whatsApp, viber } }) => (
  <Fragment>
    <h3 className="title">Phone</h3>
    <h4 className="subtitle">{phone}</h4>
    <h3 className="title">Email</h3>
    <h4 className="subtitle">{email}</h4>
    <h3 className="title">Phone</h3>
    <h4 className="subtitle">{phone}</h4>
    <h3 className="title">VK</h3>
    <h4 className="subtitle">{vk}</h4>
    <h3 className="title">Facebook</h3>
    <h4 className="subtitle">{fb}</h4>
    <h3 className="title">Telegram</h3>
    <h4 className="subtitle">{telegram}</h4>
    <h3 className="title">WhatsApp</h3>
    <h4 className="subtitle">{whatsApp}</h4>
    <h3 className="title">Viber</h3>
    <h4 className="subtitle">{viber}</h4>
  </Fragment>
);

const BookingMessage = ({ message: { date, content, source, from }}) => (
  <div className={cx("message", { "has-text-left is-info": from === "guest", "has-text-right is-success": from === "host" })}>
    <div className="message-body">
      <small>{source}</small>
      <h1 className="title">{content}</h1>
      <h2 className="subtitle">{moment(date, "YYYYMMDD").format("DD - MMM - YYYY")}</h2>
    </div>
  </div>
);

const BookingMessages = ({ booking: { messages } }) => (
  <div className="columns">
    <div className="column">
      {messages.map((message, i) => <BookingMessage key={i} message={message}/>)}
    </div>
  </div>
);

const Booking = ({ booking }) => (
  <Fragment>
    <section className="section">
      <div className="columns">
        <div className="column">
          <GuestDescription {...booking}/>
        </div>
        <div className="column">
          <BookingDates {...booking}/>
          <hr/>
          <BookingDescription {...booking}/>
        </div>
        <div className="column">
          <BookingContact {...booking}/>
        </div>
      </div>
    </section>
    <section className="section">
      <BookingMessages booking={booking}/>
    </section>
  </Fragment>
);

const mapStateToProps = ({ bookings }, { match: { params: { bookingId } } }) => ({ booking: bookings[bookingId] });
const mapDispatchToProps = (dispatch, { match: { params: { bookingId } } }) => bindActionCreators(
  {
    getBookingDetails: () => getBookingDetails(bookingId)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getBookingDetails }, Booking);