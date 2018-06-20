import { createAction } from "redux-actions";
import { apiFactory } from "./apiFactory";

const api = apiFactory("/api/tasks");

export const UPDATING_STATUS = "updating";
export const UP_TO_DATE_STATUS = "upToDate";

export const getTasks = createAction(
  "TASKS_GET",
  async () => await api.get()
);

export const updateTask = createAction(
  "TASKS_UPDATE",
  async (taskId) => await api.put(taskId, {}),
  (taskId) => ({ taskId })
);

export const updateTaskChannel = createAction(
  "TASKS_UPDATE_CHANNEL",
  async (taskId, channel) => await api.put(`${taskId}/channel/${channel}`, {}),
  (taskId, channel) => ({ taskId, channel })
);