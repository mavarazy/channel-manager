import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getMonthReport } from "../../reducers/reports.actions";
import BookingsReport from "./BookingsReport";
import ListingReport from "./ListingReport";

const YearMonthReport = (report) => (
  <Fragment>
    <section className="section">
      <ListingReport report={report}/>
    </section>
    <section className="section">
      <BookingsReport bookings={report.bookings || []}/>
    </section>
  </Fragment>
);

const mapStateToProps = ({ reports }, { match: { params: { listingId, year, month }}}) => selectn(`${listingId}.${year}.months.${month}`, reports);
const mapDispatchToProps = (dispatch, { match: { params: { listingId, year, month }}}) => bindActionCreators(
  {
    getMonthReport: () => getMonthReport(listingId, year, month),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ getMonthReport }, YearMonthReport);