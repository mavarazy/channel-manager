import React from "react";
import ListNavigation from "../../components/ListNavigation";

const YearMonthNav = ({ match: { params: { year, listingId }}}) => (
  <div className="tabs is-toggle">
    <ListNavigation routes={
      [
        { to: `/reports/${listingId}/${year}`, text: year, exact: true },
        { to: `/reports/${listingId}/${year}/1`, text: "Jan" },
        { to: `/reports/${listingId}/${year}/2`, text: "Feb" },
        { to: `/reports/${listingId}/${year}/3`, text: "Mar" },
        { to: `/reports/${listingId}/${year}/4`, text: "Apr" },
        { to: `/reports/${listingId}/${year}/5`, text: "May" },
        { to: `/reports/${listingId}/${year}/6`, text: "Jun" },
        { to: `/reports/${listingId}/${year}/7`, text: "Jul" },
        { to: `/reports/${listingId}/${year}/8`, text: "Aug" },
        { to: `/reports/${listingId}/${year}/9`, text: "Sep" },
        { to: `/reports/${listingId}/${year}/10`, text: "Oct" },
        { to: `/reports/${listingId}/${year}/11`, text: "Nov" },
        { to: `/reports/${listingId}/${year}/12`, text: "Dec" },
      ]
    }/>
  </div>
);

export default YearMonthNav