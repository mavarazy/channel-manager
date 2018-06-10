import React, { Component } from "react";
import { connect } from "react-redux";

const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const withLoader = (loadingTasks, TargetComponent) => {
  class LoadingComponent extends Component {
    state = { isLoading: true };

    componentDidMount() {
      const tasks = isFunction(loadingTasks) ? loadingTasks(this.props) : Promise.all(Object.keys(loadingTasks).map(key => this.props[key]()));
      tasks.then(() => !this.destroyed && this.setState({ isLoading: false }));
    }

    componentWillUnmount() {
      this.destroyed = true;
    }

    render() {
      if (this.state.isLoading) {
        return <div className="hero">
          <div className="hero-body has-text-centered">
            <div className="button is-large is-primary is-loading is-outlined" style={{ border: 0 }}/>
          </div>
        </div>
      } else {
        return <TargetComponent {... this.props}/>
      }
    }
  }

  return LoadingComponent;
};

export const connectAndLoad = (mapStateToProps, mapDispatchToProps, loading, Component) => (
  connect(mapStateToProps, mapDispatchToProps)(withLoader(loading, Component))
);