import React from "react";
import ReactJson from "react-json-view";
import { bindActionCreators } from "redux";
import { connectAndLoad } from "../../components/connectAndLoad";
import { getAvailability } from "../../reducers/availability.actions";

const Calendar = ({ calendar }) => {
  return (
    <ReactJson src={calendar}/>
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