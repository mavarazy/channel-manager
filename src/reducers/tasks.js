import { handleActions, combineActions } from "redux-actions";
import { connectChannel, disConnectChannel } from "./channels.actions";
import {
  activateListing,
  deActivateListing,
  disableListingChannel,
  enableListingChannel,
  updateBookingProcess, updateGuestRequirements
} from "./listings.actions";
import { lockDates, releaseDates } from "./availability.actions";
import { cancelBooking } from "./bookings.actions";
import { produce } from "./produce";
import { getTasks, updateTask, updateTaskChannel } from "./tasks.actions";

export const tasksReducer = handleActions(
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
    [combineActions(activateListing, deActivateListing, lockDates, releaseDates, cancelBooking, enableListingChannel, disableListingChannel, connectChannel, disConnectChannel, updateBookingProcess, updateGuestRequirements)]: produce((draft, { payload }) => {
      draft[payload.taskId] = payload;
    })
  },
  {}
);