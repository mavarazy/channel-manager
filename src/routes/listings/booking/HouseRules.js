import React, { Fragment } from "react";
import Statement from "./Statement";

const HouseRules = ({ houseRules: { general: { suitableForChildren, suitableForInfants, petsAllowed, smokingAllowed, partiesAllowed } } }) => (
  <Fragment>
    <Statement isTrue={suitableForChildren}>
      {suitableForChildren ? "Suitable for children (2-12 years)" : "Not suitable for children (2-12 years)"}
    </Statement>
    <Statement isTrue={suitableForInfants}>
      {suitableForInfants ? "Suitable for infants (under 2 years)": "Not suitable for infants (under 2 years)"}
    </Statement>
    <Statement isTrue={petsAllowed}>
      {petsAllowed ? "Suitable for pets": "Not suitable for pets"}
    </Statement>
    <Statement isTrue={smokingAllowed}>
      {smokingAllowed ? "Smoking allowed": "No smoking"}
    </Statement>
    <Statement isTrue={partiesAllowed}>
      {partiesAllowed ? "Parties allowed": "No parties or events"}
    </Statement>
  </Fragment>
);

export default HouseRules;