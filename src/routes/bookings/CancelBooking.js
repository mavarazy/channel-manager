import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getBookingDetails, cancelBooking } from "../../reducers/bookings.actions";

import { Link, withRouter } from "react-router-dom";

import cx from "classnames";
import { Form, Field, reduxForm } from "redux-form";

const CancelForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="field is-grouped is-grouped-centered">
      <div className="control is-expanded">
        <Field name="reason" className="input" component="input" placeholder="Reason"/>
      </div>
      <div className="select">
        <Field name="status" className="select" component="select">
          <option value="booked">Blocked</option>
          <option value="available">Available</option>
        </Field>
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <Link to={"/bookings"} className="button is-primary">Back</Link>
      </div>
      <div className="control">
        <button className={cx("button is-danger", { "is-loading": submitting })}>Cancel Booking</button>
      </div>
    </div>
  </Form>
);

const CancelFormRedux = reduxForm({ form: "cancel-booking", initialValues: { status: "blocked" } })(CancelForm);

const CancelBooking = ({ booking, cancelBooking, history }) => (
  <Fragment>
    <h2 className="title is-danger">Cancel {booking.reservationId}</h2>
    <h3 className="subtitle">Platform might apply fees</h3>
    <div className="columns">
      <div className="column is-half-desktop is-8-tablet">
      <CancelFormRedux onSubmit={(reason) => cancelBooking(reason).then(() => history.push("/bookings"))}/>
      </div>
    </div>
  </Fragment>
);


const mapStateToProps = ({ bookings }, { match: { params: { bookingId } } }) => ({ booking: bookings[bookingId] });
const mapDispatchToProps = (dispatch, { match: { params: { bookingId } } }) => bindActionCreators(
  {
    getBookingDetails: () => getBookingDetails(bookingId),
    cancelBooking: (reason) => cancelBooking(bookingId, reason)
  },
  dispatch
);

export default withRouter(connectAndLoad(mapStateToProps, mapDispatchToProps, { getBookingDetails }, CancelBooking));