import React, { Fragment } from "react";
import { connect } from "react-redux";
import ReactJson from "react-json-view";

const TaskRow = ({ status, category, type, channel: { airBnB, booking } }) => (
  <tr>
    <td>{status}</td>
    <td>{category}</td>
    <td>{type}</td>
    <td>{airBnB}</td>
    <td>{booking}</td>
  </tr>
);

const TasksTable = ({ tasks }) => (
  <table className="table has-text-centered is-fullwidth">
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
      {tasks.map((task, i) => <TaskRow key={task.taskId} {...task}/>)}
    </tbody>
  </table>
);

const Tasks = ({ tasks }) => (
  <TasksTable tasks={tasks}/>
);

const mapStateToProps = ({ tasks }) => ({ tasks: Object.values(tasks) });

export default connect(mapStateToProps)(Tasks);