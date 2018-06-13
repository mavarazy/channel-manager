import React, { Fragment } from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getYearReport, getMonthReport } from "../../reducers/reports.actions";

import ReactJSON from "react-json-view";

const PropertyReport = ({ report }) => (
  <Fragment>
    <ReactJSON src={report}/>
  </Fragment>
);


const mapStateToProps = ({ reports }, { match: { params: { propertyId, year }}}) => ({ report: selectn(`${propertyId}.${year}`, reports) });
const mapDispatchToProps = (dispatch, { match: { params: { propertyId, year }}}) => bindActionCreators(
  {
    getYearReport: () => getYearReport(propertyId, year),
    getMonthReport: (month) => getMonthReport(propertyId, year, month),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getYearReport }, PropertyReport);