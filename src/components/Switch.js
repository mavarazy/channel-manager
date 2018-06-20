import React, { Component } from "react";

export class Switch extends Component {
  state = { isLoading: false };

  handleToggle = () => {
    if (this.state.isLoading || this.props.disabled === true) {
      return;
    }

    this.setState({ isLoading: true });
    this.props.onClick().then(() => this.setState({ isLoading: false }))
  };

  render() {
    const { checked, text, disabled = false } = this.props;
    return (
      <div className="field">
        <div className={"control"}>
          <input
            type="checkbox"
            className={"switch is-rounded"}
            onChange={this.handleToggle}
            checked={checked}
            disabled={this.state.isLoading || disabled}
          />
          <label className="checkbox" onClick={this.handleToggle}>{text}</label>
        </div>
      </div>
    );
  }
}