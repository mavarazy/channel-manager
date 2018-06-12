import React, { Component } from "react";
import { connect } from "react-redux";

const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const withLoader = (loadingTasks, TargetComponent) => {
  class LoadingComponent extends Component {
    state = { isLoading: true };

    load = () => {
      this.setState({ isLoading: true });
      const tasks = isFunction(loadingTasks) ? loadingTasks(this.props) : Promise.all(Object.keys(loadingTasks).map(key => this.props[key]()));
      tasks.then(() => !this.destroyed && this.setState({ isLoading: false }));
    };

    componentDidMount() {
      this.load();
    }

    componentWillReceiveProps() {
      this.load();
    }

    componentWillUnmount() {
      this.destroyed = true;
    }

    render() {
      if (this.state.isLoading) {
        return (
          <div className="container has-text-centered">
            <div className="button is-large is-primary is-loading is-outlined is-inverted"/>
          </div>
        )
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