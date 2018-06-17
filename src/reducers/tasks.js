import { handleActions } from "redux-actions";
import { produce } from "./produce";
import { getTasks } from "./tasks.actions";

const tasksReducer = handleActions(
  {
    [getTasks]: produce((draft, { payload: status }) => {
      status.forEach(s => {
        const { taskId } = s;
        draft[taskId] = s;
      });
    }),
  },
  []
);

export default tasksReducer;