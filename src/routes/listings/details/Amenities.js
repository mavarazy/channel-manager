import React, { Fragment } from "react";

const amenityToPresentation = {
  essentials: <h5 className="subtitle is-marginless">Essentials</h5>,
  kitchen: <h5 className="subtitle is-marginless">Kitchen</h5>,
  heating: <h5 className="subtitle is-marginless">Heating</h5>,
  hairDryer: <h5 className="subtitle is-marginless">Hair Dryer</h5>,
  hangers: <h5 className="subtitle is-marginless">Hangers</h5>,
  iron: <h5 className="subtitle is-marginless">Iron</h5>,
  washer: <h5 className="subtitle is-marginless">Washer</h5>,
  hotWater: <h5 className="subtitle is-marginless">Hot Water</h5>,
}


const Amenities = ({ amenities }) => (
  <div className="columns">
    <div className="column">
      {Object.entries(amenities).map(([amenity, present], i) => present && i % 2 === 0 ? <Fragment key={i}>{amenityToPresentation[amenity]}</Fragment> : null)}
    </div>
    <div className="column">
      {Object.entries(amenities).map(([amenity, present], i) => present && i % 2 === 1 ? <Fragment key={i}>{amenityToPresentation[amenity]}</Fragment> : null)}
    </div>
    <div className="column">
    </div>
  </div>
);

export default Amenities;

