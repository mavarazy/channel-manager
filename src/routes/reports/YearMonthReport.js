import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getMonthReport } from "../../reducers/reports.actions";
import BookingsReport from "./BookingsReport";
import PropertyReport from "./PropertyReport";

const YearMonthReport = ({ report }) => (
  <Fragment>
    <PropertyReport report={report}/>
    <div className="container">
    <BookingsReport bookings={report.bookings || []}/>
    </div>
  </Fragment>
);

const mapStateToProps = ({ reports }, { match: { params: { propertyId, year, month }}}) => ({ report: selectn(`${propertyId}.${year}.months.${month}`, reports) });
const mapDispatchToProps = (dispatch, { match: { params: { propertyId, year, month }}}) => bindActionCreators(
  {
    getMonthReport: () => getMonthReport(propertyId, year, month),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getMonthReport }, YearMonthReport);