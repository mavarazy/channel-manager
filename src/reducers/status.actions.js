import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/status");

export const getStatus = createAction(
  "STATUS_GET",
  async () => await api.get()
);