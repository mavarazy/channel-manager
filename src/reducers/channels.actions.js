import { createAction } from "redux-actions";
import { apiFactory } from "./apiFactory";
import { NOT_CONNECTED } from "./listings.actions";

const api = apiFactory("/api/channels");

export const listChannels = createAction(
  "CHANNELS_LIST",
  async () => await api.get(),
);

export const connectChannel = createAction(
  "CHANNEL_CONNECT",
  async (channel) => await api.post(channel),
  channel => ({ channel })
);

export const disConnectChannel = createAction(
  "CHANNEL_DISCONNECT",
  async (channel) => await api.remove(channel),
  channel => ({ channel })
);

export const toggleChannel = (channel, status) => status === NOT_CONNECTED ? connectChannel(channel) : disConnectChannel(channel);