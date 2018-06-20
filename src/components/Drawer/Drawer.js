import React, { Component } from "react";
import cx from "classnames";

export class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: props.match !== undefined };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match !== this.props.match) {
      this.setState(() => ({ isActive: nextProps.match !== undefined }))
    }
  }

  toggleActive = () => {
    this.setState(state => ({ isActive: !state.isActive }))
  };

  render() {
    return (
      <div className={cx("quickview is-large", { "is-active": this.state.isActive })}>
        <header className="quickview-header">
          <p className="title">Booking</p>
          <span className="delete" onClick={this.toggleActive}/>
        </header>
        <div className="quickview-body">
          <div className="quickview-block">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}