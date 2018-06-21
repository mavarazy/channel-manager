import React, { Fragment } from "react";
import { Field } from "redux-form";
import { HorizontalInput, TextArea } from "../../../components/form";
import EditForm from "../EditForm";
import { settingsBlock } from "../../../components";

const DescriptionView = ({ description: { title, summary } }) => (
  <Fragment>
    <h1 className="title">{title}</h1>
    <div className="subtitle">{summary}</div>
  </Fragment>
);

const DescriptionEdit = ({ onChange, switchMode, description }) => (
  <EditForm
    form="description"
    initialValues={description}
    onCancel={switchMode}
    onSubmit={(desc) => onChange(desc).then(() => switchMode())}
  >
    <Field
      name="title"
      component={HorizontalInput}
      type="text"
      title="Title"
    />
    <Field
      name="summary"
      component={TextArea}
      type="textarea"
      title="Summary"
      size={4}
    />
  </EditForm>
);

const Description = settingsBlock(
  "Title & Description",
  DescriptionView,
  DescriptionEdit
);

export default Description;