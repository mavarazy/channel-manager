import React from "react";
import { settingsBlock } from "../../../components";
import { Input } from "../../../components/form";
import EditForm from "../EditForm";
import { Field } from "redux-form";
import ValueStatement from "../ValueStatement";

const GuestResourceView = ({ guestResources: { wifi, wifiPassword } }) => (
  <div>
    <ValueStatement value={wifi}>Wifi</ValueStatement>
    <ValueStatement value={wifiPassword}>Password</ValueStatement>
  </div>
);

const GuestResourceEdit = ({ onChange, switchMode, guestResources }) => (
  <EditForm
    form="guest-resource"
    initialValues={guestResources}
    onCancel={switchMode}
    onSubmit={(wifi) => onChange(wifi).then(() => switchMode())}
  >
    <Field
      name="wifi"
      component={Input}
      title="Wifi"
      type="text"
    />
    <Field
      name="wifiPassword"
      component={Input}
      title="Password"
      type="text"
    />
  </EditForm>
);

const GuestResource = settingsBlock(
  "Guest Resource",
  GuestResourceView,
  GuestResourceEdit
);

export default GuestResource;