import React, { Fragment } from "react";
import { Field } from "redux-form";
import EditForm from "../EditForm";
import { settingsBlock } from "../../../components";
import { Checkbox } from "../../../components/form";
import BooleanStatement from "../BooleanStatement";

const GuestRequirementView = ({ guestRequirements: { standard, governmentId, recommendations } }) => (
  <Fragment>
    <BooleanStatement isTrue={standard}>
      Standard Platform requirements
    </BooleanStatement>
    <hr/>
    <BooleanStatement isTrue={governmentId}>
      {governmentId ? "Government-issues ID" : "Government-issues ID"}
    </BooleanStatement>
    <hr/>
    <BooleanStatement isTrue={recommendations}>
      {recommendations ? "Recommendation from other hosts" : "Recommendation from other hosts"}
    </BooleanStatement>
  </Fragment>
);

// TODO tripInfo
const GuestRequirementsEdit = ({ guestRequirements, onChange, switchMode }) => (
  <EditForm
    form={"guest-requirements"}
    initialValues={guestRequirements}
    onSubmit={(req) => onChange(req).then(() => switchMode())}
    onCancel={switchMode}
  >
    <Field
      name="standard"
      component={Checkbox}
      title="Standard Platform requirements"
      subtitle="Confirmed phone number, email address, payment information, and agreement to House Rules."
      disabled={true}
    />
    <Field
      name="governmentId"
      component={Checkbox}
      title="Government-issued ID"
      subtitle="These guests have verified identities."
    />
    <Field
      name="recommendations"
      component={Checkbox}
      title="Recommendation from other hosts"
      subtitle="These guests have traveled on Airbnb, are recommended by other hosts, and have no negative reviews."
    />
  </EditForm>
);

const GuestRequirement = settingsBlock("Guest Requirement", GuestRequirementView, GuestRequirementsEdit);

export default GuestRequirement;