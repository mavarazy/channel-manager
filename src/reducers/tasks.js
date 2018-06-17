import { handleActions, combineActions } from "redux-actions";
import { activateListing, deActivateListing } from "./listings.actions";
import { lockDates, releaseDates } from "./availability.actions";
import { cancelBooking } from "./bookings.actions";
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
    }),
    [combineActions(activateListing, deActivateListing, lockDates, releaseDates, cancelBooking)]: produce((draft, { payload }) => {
      draft[payload.taskId] = payload;
    })
  },
  {}
);

export default tasksReducer;