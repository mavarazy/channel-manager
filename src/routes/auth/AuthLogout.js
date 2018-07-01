import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../reducers/auth.actions";

const AuthLogout = ({ logout, history }) => {
  logout();
  setTimeout(() => {
    history.push("/")
  }, 2000);
  return (
    <Fragment>
      <h1 className="title">Goodbye</h1>
    </Fragment>
  );
};

const mapStateToProps = undefined;
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogout);