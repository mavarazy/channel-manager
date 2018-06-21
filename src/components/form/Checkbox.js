import React, { Fragment } from "react";

export const Checkbox = ({ input, title, subtitle, disabled = false }) => (
  <Fragment>
    <div className="columns is-clickable" onClick={() => input.onChange(!input.value)}>
      <div className="column is-1">
        <input
          {...input}
          className="is-checkradio is-circle"
          type="checkbox"
          checked={input.value}
          disabled={disabled}
        />
        <label/>
      </div>
      <div className="column">
        <h5 className="title is-size-5">{title}</h5>
        <h5 className="subtitle is-size-5">{subtitle}</h5>
      </div>
    </div>
    <hr/>
  </Fragment>
);