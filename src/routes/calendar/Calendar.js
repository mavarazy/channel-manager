import cx from "classnames";
import moment from "moment";
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getAvailability, lockDates, releaseDates } from "../../reducers/availability.actions";

const BookedStatus = () => (
  <div className="dropdown-trigger is-disabled">
    <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" disabled>
      <span>Booked</span>
    </button>
  </div>
);

class AvailableStatus extends Component {
  state = { isLoading: false };

  handleLock = () => {
    this.setState({ isLoading: true });
    this.props.lock()
  };

  render() {
    return (
      <Fragment>
        <div className="dropdown-trigger is-disabled">
          <button className={cx("button is-success", { "is-loading": this.state.isLoading })} aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Available</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className="dropdown-item" onClick={this.handleLock}>
              Lock
            </a>
          </div>
        </div>
      </Fragment>
    )
  };
}

class BlockedStatus extends Component {
  state = { isLoading: false };

  handleRelease = () => {
    this.setState({ isLoading: true });
    this.props.release();
  };

  render() {
    return (
      <Fragment>
        <div className="dropdown-trigger is-disabled">
          <button className={cx("button is-warning", { "is-loading": this.state.isLoading })} aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Locked</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className="dropdown-item" onClick={this.handleRelease}>
              Unlock
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

const BookingStatus = (props) => (
  <div className="control">
    <div className="dropdown is-primary is-hoverable">
      {props.status === "available" ? <AvailableStatus {...props}/> : props.status === "booked" ?
        <BookedStatus {...props}/> : <BlockedStatus {...props}/>}
    </div>
  </div>
);

const BookedDate = ({ status, guestName, price, channel }) => (
  <Fragment>
    {channel}<br/>
    {price}<br/>
    {guestName}
  </Fragment>
);

const AvailableDate = ({ status, channel: { airBnB = {}, booking = {} } = {} }) => (
  <Fragment>
    <div className="is-size-7">AirBnB - {airBnB.price}</div>
    <div className="is-size-7">Booking - {booking.price}</div>
  </Fragment>
);

const CalendarDate = (props) => (
  <article className={cx("tile is-child box")}>
    <p className="subtitle is-marginless">{moment(props.date, "YYYYMMDD").format("DD-MMM")}</p>
    <BookingStatus {...props}/>
    {props.status === "booked" ? <BookedDate {...props}/> : props.status === "available" ?
      <AvailableDate {...props}/> : null}
  </article>
);

const Calendar = ({ calendar, lockDates, releaseDates }) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 0 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 1 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 2 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 3 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 4 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 5 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
          </div>
          <div className="tile is-parent is-vertical">
            {calendar.map((cal, i) => i % 7 === 6 ?
              <CalendarDate key={i} {...cal} lock={() => lockDates({ from: cal.date, to: cal.date })}
                            release={() => releaseDates({ from: cal.date, to: cal.date })}/> : null)}
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
    getAvailability: () => getAvailability(propertyId),
    lockDates: (fromTo) => lockDates(propertyId, fromTo),
    releaseDates: (fromTo) => releaseDates(propertyId, fromTo)
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getAvailability }, Calendar);