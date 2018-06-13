import cx from "classnames";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Field, Form, reduxForm } from "redux-form";
import { register } from "../../reducers/auth.actions";

const RegisterForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="field">
      <div className="control">
        <Field
          name="firstName"
          component="input"
          placeholder="First Name"
          className="input"
          type="text"
          label="Password"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <Field
          name="lastName"
          component="input"
          placeholder="Last Name"
          className="input"
          type="text"
          label="Password"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <Field
          name="username"
          component="input"
          className="input"
          placeholder="Email"
          type="email"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <Field
          name="password"
          component="input"
          placeholder="Password"
          className="input"
          type="password"
          label="Password"
        />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <button className={cx("button is-primary", { "is-loading": submitting })} type="submit">
          Register
        </button>
      </div>
      <div className="column">
        <Link to="/auth" className="is-link is-pulled-right">
          Login
        </Link>
      </div>
    </div>
  </Form>
);

const RegisterFormRedux = reduxForm({ form: "register" })(RegisterForm);

const AuthRegister = ({ register, history }) => (
  <Fragment>
    <h1 className="title">Register</h1>
    <div className="columns">
      <div className="column is-3-desktop is-half-tablet">
        <RegisterFormRedux onSubmit={(regForm) => register(regForm).then(() => history.push("/"))}/>
      </div>
    </div>
  </Fragment>
);

const mapStateToProps = undefined;
const mapDispatchToProps = (dispatch) => bindActionCreators({ register }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegister);