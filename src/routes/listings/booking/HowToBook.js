import React, { Fragment } from "react";
import { Field } from "redux-form";
import { settingsBlock } from "../../../components";
import { Radio } from "../../../components/form";
import EditForm from "../EditForm";

const InstantBooking = () => (
  <Fragment>
    <h5 className="title is-size-5">Guests who meet all your requirements can book instantly.</h5>
    <h6 className="subtitle is-size-5">Others will need to send a reservation request</h6>
  </Fragment>
);

const RequestBooking = () => (
  <Fragment>
    <h5 className="title is-size-5">All guests must send a reservation request</h5>
  </Fragment>
);

const HowToBookView = ({ process: { instant } }) => (
  <div className="columns">
    <div className="column">
      {instant ? <InstantBooking/> : <RequestBooking/>}
    </div>
  </div>
);

const HowToBookEdit = (props) => (
  <EditForm
    form="how-to-book"
    initialValues={{ type: props.process.instant ? "instant" : "required" }}
    onSubmit={({ type }) => props.onChange({ instant: type === "instant" }).then(() => props.switchMode())}
    onCancel={props.switchMode}
  >
    <Field
      name="type"
      component={Radio}
      type="radio"
      value="instant"
      title="Guests who meet all your requirements can book instantly."
      subtitle="Others will need to send a reservation request"
      tag="RECOMMENDED"
    />
    <Field
      name="type"
      component={Radio}
      type="radio"
      value="required"
      title="All guests must send a reservation request"
    />
  </EditForm>
);

const HowToBook = settingsBlock("How guests can book", HowToBookView, HowToBookEdit,);

export default HowToBook;