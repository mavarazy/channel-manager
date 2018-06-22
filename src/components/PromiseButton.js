import React, { Component } from "react";
import cx from "classnames";

export class PromiseButton extends Component {
  state = { isLoading: false };

  handleClick = () => {
    if (this.state.isLoading || this.props.disabled === true) {
      return;
    }

    this.setState({ isLoading: true });
    this.props.onClick().then(() => this.setState({ isLoading: false }))
  };

  render() {
    const { className, children } = this.props;
    return (
      <a className={cx("button is-outlined", className, { "is-loading": this.state.isLoading })} onClick={this.handleClick}>{children}</a>
    );
  }
}