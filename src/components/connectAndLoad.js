import React, { Component } from "react";
import { connect } from "react-redux";

const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const withLoader = (loadingTasks, TargetComponent) => {
  class LoadingComponent extends Component {
    state = { isLoading: true };

    load = (props) => {
      this.setState({ isLoading: true });
      const tasks = isFunction(loadingTasks) ? loadingTasks(props) : Promise.all(Object.keys(loadingTasks).map(key => props[key]()));
      tasks.then(() => !this.destroyed && this.setState({ isLoading: false }));
    };

    componentDidMount() {
      this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.match !== this.props.match) {
        this.load(nextProps);
      }
    }

    componentWillUnmount() {
      this.destroyed = true;
    }

    render() {
      const { data, ...others } = this.props;
      if (this.state.isLoading || data === undefined) {
        return (
          <div className="container has-text-centered">
            <div className="button is-large is-primary is-loading is-outlined is-inverted"/>
          </div>
        )
      } else {
        return <TargetComponent {...data} {... others}/>
      }
    }
  }

  return LoadingComponent;
};

const mapStateToPropsWithData = (mapStateToProps) => (state, props) => {
  const data = mapStateToProps(state, props);
  return { data }
};

export const connectAndLoad = (mapStateToProps, mapDispatchToProps, ...rest) => (loading, Component) => (
  connect(
    mapStateToPropsWithData(mapStateToProps),
    mapDispatchToProps,
    ...rest
  )(withLoader(loading, Component))
);