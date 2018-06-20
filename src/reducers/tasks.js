import { getTasks, updateTask, updateTaskChannel } from "./tasks.actions";

export const tasksReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case `${getTasks}`:
      return payload.reduce((agg, task) => Object.assign(agg, { [task.taskId]: task }), {});
    case `${updateTask}`:
      return Object.assign(state, { [payload.taskId]: payload });
    case `${updateTaskChannel}`:
      return Object.assign(state, { [payload.taskId]: payload });
    default:
      if (payload && payload.taskId) {
        return Object.assign(state, { [payload.taskId]: payload });
      } else {
        return state;
      }
  }
};