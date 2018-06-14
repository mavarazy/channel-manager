import React from "react";
import PieChart from "../../components/chart/PieChart";

const EARNINGS_CHART_CONF = {
  dataKey: "total",
  nameKey: "channel"
};

const BOOKING_CHART_CONF = {
  dataKey: "booked",
  nameKey: "channel",
  fill: "#8884d8"
};

const ListingReport = ({ report: { channel, summary} }) => {
  const pieChartData = Object.entries(channel).map(([channel, statistics]) => Object.assign({ channel }, statistics));
  const occupied = (summary.available === 0 ? 0 : summary.booked / (summary.available + summary.booked)) * 100;
  const available = (summary.available + summary.booked) / (summary.available + summary.booked + summary.blocked) * 100;
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <h4 className="title">Earnings - <strong>{summary.total}</strong></h4>
        <PieChart data={pieChartData} conf={EARNINGS_CHART_CONF}/>
      </div>
      <div className="column has-text-centered">
        <h4 className="title">Bookings - <strong>{summary.booked}</strong></h4>
        <PieChart data={pieChartData} conf={BOOKING_CHART_CONF}/>
      </div>
      <div className="column">
        <h4 className="title">Summary</h4>
        <h5 className="subtitle is-marginless"><strong>Earned:</strong> {summary.total.toFixed(2)}</h5>
        <h5 className="subtitle is-marginless"><strong>Occupied:</strong> {occupied.toFixed(1)} %</h5>
        <h5 className="subtitle is-marginless"><strong>Available:</strong> {available.toFixed(1)} %</h5>
      </div>
    </div>
  );
};

export default ListingReport;