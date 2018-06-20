import React, { Fragment } from "react";
import { Field, Form, reduxForm } from "redux-form";
import cx from "classnames";
import { settingsBlock } from "../../../components";

const InstantBooking = () => (
  <Fragment>
    <h5 className="title is-size-5">
      Guests who meet all your requirements can book instantly.
    </h5>
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

const HowToBookForm = ({ handleSubmit, onCancel, change, pristine, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="columns is-clickable" onClick={() => change("type", "instant")}>
      <div className="column is-1 has-text-centered">
        <div className="field">
          <Field
            name="type"
            component="input"
            className="is-checkradio"
            type="radio"
            value="instant"
          />
          <label/>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <InstantBooking/>
          <span className="tag">RECOMMENDED</span>
        </div>
      </div>
    </div>
    <hr/>
    <div className="columns is-clickable" onClick={() => change("type", "required")}>
      <div className="column is-1 has-text-centered">
        <div className="field">
          <Field
            id="required"
            name="type"
            component="input"
            className="is-checkradio"
            type="radio"
            value="required"
          />
          <label htmlFor="required"/>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <RequestBooking/>
        </div>
      </div>
    </div>
    <hr/>
    <div className="buttons">
      <a className="button" onClick={onCancel}>Cancel</a>
      <button type="submit" className={cx("button is-primary", { "is-loading": submitting })} disabled={pristine}>Save</button>
    </div>
  </Form>
);

const HowToBookFormRedux = reduxForm({ form: "how-to-book" })(HowToBookForm);

const HowToBookEdit = (props) => (
  <HowToBookFormRedux
    initialValues={{ type: props.process.instant ? "instant" : "required" }}
    onSubmit={({ type }) => props.onChange({ instant: type === "instant" }).then(() => props.switchMode())}
    onCancel={props.switchMode}
  />
);

const HowToBook = settingsBlock("How guests can book", HowToBookView, HowToBookEdit,);

export default HowToBook;