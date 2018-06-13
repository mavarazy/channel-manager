import cx from "classnames";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { login } from "../../reducers/auth.actions";

const LoginForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
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
          Login
        </button>
      </div>
      <div className="column">
        <Link to="/auth/register" className="is-link is-pulled-right">
          Create account
        </Link>
      </div>
    </div>
  </Form>
);

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

const AuthLogin = ({ login, history }) => (
  <Fragment>
    <h1 className="title">Login</h1>
    <div className="columns">
      <div className="column is-3-desktop is-half-tablet">
        <LoginFormRedux onSubmit={(cred) => login(cred).then(() => history.push("/"))}/>
      </div>
    </div>
  </Fragment>
);

const mapStateToProps = undefined;
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);