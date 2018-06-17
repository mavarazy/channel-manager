import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/tasks");

export const getTasks = createAction(
  "TASKS_GET",
  async () => await api.get()
);