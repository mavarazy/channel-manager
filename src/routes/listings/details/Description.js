import React, { Fragment } from "react";

const Description = ({ description: { title, summary } }) => (
  <Fragment>
    <h1 className="title">{title}</h1>
    <div className="subtitle">{summary}</div>
  </Fragment>
);

export default Description;