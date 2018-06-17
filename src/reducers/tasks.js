import { handleActions } from "redux-actions";
import { produce } from "./produce";
import { getTasks, updateTask, updateTaskChannel } from "./tasks.actions";

const tasksReducer = handleActions(
  {
    [getTasks]: produce((draft, { payload: tasks }) => {
      tasks.forEach(s => {
        const { taskId } = s;
        draft[taskId] = s;
      });
    }),
    [updateTask]: produce((draft, { payload: task, meta: { taskId }}) => {
      draft[taskId] = task;
    }),
    [updateTaskChannel]: produce((draft, { payload: task, meta: { taskId }}) => {
      draft[taskId] = task;
    })
  },
  []
);

export default tasksReducer;