import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../reducers/auth.actions";

const AuthLogout = ({ logout, history }) => {
  logout();
  setTimeout(() => {
    history.push("/")
  }, 3000);
  return (
    <Fragment>
      <h1 className="title">Goodbye</h1>
    </Fragment>
  );
};

const mapStateToProps = undefined;
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogout);