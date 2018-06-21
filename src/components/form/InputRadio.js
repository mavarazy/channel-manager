import React, { Fragment } from "react";

export const InputRadio = ({ input, title, subtitle, tag, disabled = false }) => (
  <Fragment>
    <div className="columns is-clickable" onClick={() => input.onChange(input.value)}>
      <div className="column is-1 has-text-centered">
        <div className="field">
          <input
            {...input}
            className="is-checkradio"
            type="radio"
          />
          <label/>
        </div>
      </div>
      <div className="column">
        <h5 className="title is-size-5">{title}</h5>
        <h5 className="subtitle is-size-5">{subtitle}</h5>
        {tag ? <span className="tag">{tag}</span> : null}
      </div>
    </div>
    <hr/>
  </Fragment>
);