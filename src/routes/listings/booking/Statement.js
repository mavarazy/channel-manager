import cx from "classnames";
import React, { Fragment } from "react";

const Statement = ({ isTrue, children }) => (
  <Fragment>
    <h5 className={cx("subtitle is-size-5 is-marginless", { "has-text-grey": !isTrue, "has-text-primary": isTrue })}>{children} {isTrue ? null : <span className="tag is-pulled-right">NOT SET</span>}</h5>
  </Fragment>
);

export default Statement;