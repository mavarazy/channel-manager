import React, { Fragment } from "react";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getAvailability } from "../../reducers/availability.actions";
import cx from "classnames";

const BookedDate = ({ status, guestName, price, channel }) => (
  <Fragment>
    <p className="is-small">{status}</p>
    {channel}<br/>
    {price}<br/>
    {guestName}
  </Fragment>
);

const AvailableDate = ({ status, channel }) => (
  <Fragment>
    <p className="is-small">{status}</p>
    <div className="is-size-7">AirBnB - {channel.airBnB.price}</div>
    <div className="is-size-7">Booking - {channel.booking.price}</div>
  </Fragment>
);

const BlockedDate = ({ date, status }) => (
  <Fragment>
    <div className="is-small">Blocked</div>
  </Fragment>
)

const CalendarDate = (props) => (
  <article className={cx(
    "tile is-child notification", {
      "is-primary": props.status === "booked",
      "is-success": props.status === "available",
      "is-grey": props.status === "blocked"
    })
  }>
    <p className="subtitle is-marginless">{moment(props.date, "YYYYMMDD").format("DD-MMM")}</p>
    {props.status === "booked" ? <BookedDate {...props}/> : props.status === "available" ? <AvailableDate {... props}/> : <BlockedDate {...props}/>}
  </article>
);

const Calendar = ({ calendar }) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 0 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 1 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 2 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 3 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 4 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 5 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((date, i) => i % 7 === 6 ? <CalendarDate key={i} {... date}/> : null)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ availability }, { match: { params: { propertyId } } }) => {
  const calendar = Object.values(availability[propertyId] || {});
  return { calendar };
};
const mapDispatchToProps = (dispatch, { match: { params: { propertyId } } }) => bindActionCreators(
  {
    getAvailability: () => getAvailability(propertyId)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getAvailability }, Calendar);