import React from "react";
import selectn from "selectn";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getYearReport } from "../../reducers/reports.actions";
import ListingReport from "./ListingReport";

const YearReport = ({ report }) => <ListingReport report={report}/>;

const mapStateToProps = ({ reports }, { match: { params: { listingId, year }}}) => ({ report: selectn(`${listingId}.${year}`, reports) });
const mapDispatchToProps = (dispatch, { match: { params: { listingId, year }}}) => bindActionCreators(
  {
    getYearReport: () => getYearReport(listingId, year),
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps, { getYearReport }, YearReport);