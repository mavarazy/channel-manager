import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import cx from "classnames";
import { TaskStatusIcon } from "../../components/icon";
import { UP_TO_DATE_STATUS, UPDATING_STATUS, updateTask, updateTaskChannel } from "../../reducers/tasks.actions";

class TaskStatus extends Component {
  state = { isLoading: false };

  handleClick = () => {
    this.setState({ isLoading: true });
    this.props
      .onClick()
      .then(() => this.setState({ isLoading: false }));
  };

  render() {
    const { status } = this.props;
    const { isLoading } = this.state;
    return (
      <div onClick={this.handleClick}>
        <button className={cx("button is-small is-inverted", {
          "is-loading is-outlined": isLoading,
          "is-link": status === UPDATING_STATUS,
          "is-primary": status === UP_TO_DATE_STATUS
        })} disabled={status === UP_TO_DATE_STATUS}>
          <TaskStatusIcon status={status}/>
        </button>
        {status === UP_TO_DATE_STATUS ? "done" : "refreshing"}
      </div>
    );
  }
}

const TaskRow = ({ taskId, status, category, type, channel: { airBnB, booking }, updateTask, updateTaskChannel }) => (
  <tr>
    <td>
      <TaskStatus status={status} onClick={() => updateTask(taskId)}/>
    </td>
    <td>{category}</td>
    <td>{type}</td>
    <td><TaskStatus status={airBnB} onClick={() => updateTaskChannel(taskId, "airBnB")}/></td>
    <td><TaskStatus status={booking} onClick={() => updateTaskChannel(taskId, "booking")}/></td>
  </tr>
);

const TasksTable = ({ tasks, ...actions }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Status</th>
        <th>Category</th>
        <th>Type</th>
        <th>AirBnB</th>
        <th>Booking</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => <TaskRow key={task.taskId} {...task} {...actions}/>)}
    </tbody>
  </table>
);

const Tasks = ({ tasks, ...actions }) => (
  <TasksTable tasks={tasks} {...actions}/>
);

const mapStateToProps = ({ tasks }) => ({ tasks: Object.values(tasks) });
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateTask,
    updateTaskChannel
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);