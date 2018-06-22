import React from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { Checkbox } from "../../../components/form";
import EditForm from "../EditForm";
import BooleanStatement from "../BooleanStatement";

const AMENITIES_TO_TITLE = {
  essentials: "Essentials",
  kitchen: "Kitchen",
  heating: "Heating",
  hairDryer: "Hair Dryer",
  hangers: "Hangers",
  iron: "Iron",
  washer: "Washer",
  hotWater: "Hot Water",
};

const AmenitiesView = ({ amenities }) => (
  <div className="columns">
    <div className="column">
      {Object.entries(amenities).map(([amenity, present], i) => i % 2 === 0 ? <BooleanStatement key={i} isTrue={present}>{AMENITIES_TO_TITLE[amenity]}</BooleanStatement> : null)}
    </div>
    <div className="column">
      {Object.entries(amenities).map(([amenity, present], i) => i % 2 === 1 ? <BooleanStatement key={i} isTrue={present}>{AMENITIES_TO_TITLE[amenity]}</BooleanStatement> : null)}
    </div>
  </div>
);

const AmenitiesEdit = ({ onChange, switchMode, amenities }) => (
  <EditForm
    form="amenities"
    initialValues={amenities}
    onCancel={switchMode}
    onSubmit={(amenities) => onChange(amenities).then(() => switchMode())}
  >
    {
      Object.entries(AMENITIES_TO_TITLE).map(([field, title]) => (
        <Field
          key={field}
          name={field}
          component={Checkbox}
          title={title}
        />
      ))
    }
  </EditForm>
);

const Amenities = settingsBlock(
  "Amenities",
  AmenitiesView,
  AmenitiesEdit
);

export default Amenities;

