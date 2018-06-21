import React from "react";
import { settingsBlock } from "../../../components";
import { Input, Select } from "../../../components/form";
import { Field } from "redux-form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const PROPERTY_TYPES = [ "Apartment", "Condominium", "Loft", "Serviced apartment"];
const ROOM_TYPES = [ "Entire Place", "Private Room", "Shared Room" ];

const OverviewView = ({ overview: { accommodates, bathrooms, bedrooms, beds, propertyType, roomType } }) => (
  <div className="columns">
    <div className="column">
      <ValueStatement value={accommodates}>Accommodates</ValueStatement>
      <hr/>
      <ValueStatement value={bathrooms}>Bathrooms</ValueStatement>
      <hr/>
      <ValueStatement value={bedrooms}>Bedrooms</ValueStatement>
    </div>
    <div className="column">
      <ValueStatement value={beds}>Beds</ValueStatement>
      <hr/>
      <ValueStatement value={propertyType}>Property type</ValueStatement>
      <hr/>
      <ValueStatement value={roomType}>Room type</ValueStatement>
    </div>
  </div>
);

const OverviewEdit = ({ onChange, switchMode, overview }) => (
  <EditForm
    form="overview"
    initialValues={overview}
    onCancel={switchMode}
    onSubmit={(overview) => onChange(overview).then(() => switchMode())}
  >
    <Field
      name="accommodates"
      component={Input}
      type="number"
      title="Accommodates"
    />
    <Field
      name="bathrooms"
      component={Input}
      type="number"
      title="Bathrooms"
    />
    <Field
      name="beds"
      component={Input}
      type="number"
      title="Bedrooms"
    />
    <Field
      name="propertyType"
      component={Select}
      type="number"
      title="Property type"
    >
      {PROPERTY_TYPES.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
    <Field
      name="roomType"
      component={Select}
      type="number"
      title="Room type"
    >
      {ROOM_TYPES.map(val => <option key={val} value={val}>{val}</option>)}
    </Field>
  </EditForm>
);

const Overview = settingsBlock(
  "Rooms & Guests",
  OverviewView,
  OverviewEdit
);

export default Overview;

