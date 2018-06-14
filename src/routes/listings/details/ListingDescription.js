import React, { Fragment } from "react";

const ListingDescription = ({ description: { title, summary } }) => (
  <Fragment>
    <h1 className="title">{title}</h1>
    <div className="subtitle">{summary}</div>
  </Fragment>
);

export default ListingDescription;