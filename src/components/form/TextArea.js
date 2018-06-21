import React, { Fragment } from 'react';

export const TextArea = ({ input, title, subtitle, size = 1}) => (
  <Fragment>
    <div className="columns">
      <div className="column">
        <h5 className="title is-size-5">{title}</h5>
        <h5 className="subtitle is-size-5">{subtitle}</h5>
        <div className="field">
          <div className="control">
            <textarea className="textarea is-medium" {...input} rows={size}/>
          </div>
        </div>
      </div>
    </div>
    <hr/>
  </Fragment>
);