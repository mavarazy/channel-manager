import React, { Fragment } from "react";
import { settingsBlock } from "../../../components";
import { Field } from "redux-form";
import { InputNumber } from "../../../components/form";
import EditForm from "../EditForm";
import ValueStatement from "../ValueStatement";

const TripLengthView = ({ min, max}) => (
  <Fragment>
    <ValueStatement value={min}>Minimum stay</ValueStatement>
    <hr/>
    <ValueStatement value={max}>Maximum stay</ValueStatement>
  </Fragment>
);

const TripLengthEdit = ({ onChange, switchMode, ...rest }) => (
  <EditForm
    form="trip-length"
    initialValues={rest}
    onCancel={switchMode}
    onSubmit={(req) => onChange(req).then(() => switchMode())}
  >
    <Field
      name="min"
      type="number"
      title="Minimum stay"
      component={InputNumber}
    />
    <Field
      name="max"
      type="number"
      title="Maximum stay"
      component={InputNumber}
    />
  </EditForm>
);

const TripLength = settingsBlock(
  "Trip length",
  TripLengthView,
  TripLengthEdit
);

export default TripLength;