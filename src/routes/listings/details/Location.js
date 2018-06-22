import React from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { Radio } from "../../../components/form";
import ValueStatement from "../ValueStatement";
import EditForm from "../EditForm";

const LocationView = ({ location: { country, city, zip, address, display } }) => (
  <div>
    <ValueStatement value={country}>Country</ValueStatement>
    <ValueStatement value={city}>City</ValueStatement>
    <ValueStatement value={address}>Address</ValueStatement>
    <ValueStatement value={zip}>Zip</ValueStatement>
    <hr/>
    <ValueStatement value={display === "specific" ? "Specific location" : "General location (default)"}>Display</ValueStatement>
  </div>
);

const LocationEdit = ({ onChange, switchMode, location }) => (
  <EditForm
    form="location"
    initialValues={location}
    onCancel={switchMode}
    onSubmit={(location) => onChange(location).then(() => switchMode())}
  >
    <ValueStatement value={location.country}>Country</ValueStatement>
    <ValueStatement value={location.city}>City</ValueStatement>
    <ValueStatement value={location.address}>Address</ValueStatement>
    <ValueStatement value={location.zip}>Zip</ValueStatement>
    <hr/>
    <h5 className="title is-size-5">Display</h5>
    <Field
      name="display"
      component={Radio}
      type="radio"
      value="general"
      title="General location (default)"
      subtitle="Show only the general area of this listing to anyone searching for a place to stay."
    />
    <Field
      name="display"
      component={Radio}
      type="radio"
      value="specific"
      title="Specific location"
      subtitle="Show a more specific location to guests searching for a place to stay."
    />
  </EditForm>
);

const Location = settingsBlock(
  "Location",
  LocationView,
  LocationEdit
);

export default Location;