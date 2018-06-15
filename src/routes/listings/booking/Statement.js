import cx from "classnames";
import React from "react";

const Statement = ({ isTrue, children }) => (
  <h5 className={cx("subtitle is-marginless", { "has-text-grey": !isTrue, "has-text-primary": isTrue })}>{children}</h5>
);

export default Statement;