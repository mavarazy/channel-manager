import React from "react";

export const ValueStatement = ({ value, children }) => (
  <h5 className="subtitle is-size-5 is-marginless">{children} <strong className="is-pulled-right">{value}</strong></h5>
);

export default ValueStatement;