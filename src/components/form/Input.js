import React, { Fragment } from 'react';

export const Input = ({ input, title, subtitle }) => (
  <Fragment>
    <div className="columns">
      <div className="column">
        <h5 className="title is-size-5">{title}</h5>
        <h5 className="subtitle is-size-5">{subtitle}</h5>
      </div>
      <div className="column is-6">
        <div className="field">
          <div className="control">
            <input className="input is-medium" {...input}/>
          </div>
        </div>
      </div>
    </div>
    <hr/>
  </Fragment>
);