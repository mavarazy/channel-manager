import React, { Component, Fragment } from "react";

const EditButton = ({ enabled, onClick }) => enabled
  ? <button className="button is-primary is-outlined is-pulled-right" onClick={onClick}> Edit</button>
  : null;

export const settingsBlock = (title, ViewComponent, EditComponent) => {
  class SettingsBlock extends Component {
    state = { edit: false };

    switchMode = () => this.setState(({ edit }) => ({ edit: !edit }));

    render() {
      const { edit } = this.state;

      return (
        <Fragment>
          <h3 className="subtitle has-text-weight-bold">{title} <EditButton enabled={!edit} onClick={this.switchMode}/></h3>
          {edit ? <EditComponent {...this.props} switchMode={this.switchMode}/> : <ViewComponent {...this.props} switchMode={this.switchMode}/>}
          <hr/>
        </Fragment>
      )
    }
  }

  return SettingsBlock;
};