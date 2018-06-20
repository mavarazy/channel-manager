import { handleActions } from "redux-actions";
import { CONNECTED, NOT_CONNECTED } from "./listings.actions";
import { produce } from "./produce";
import { listChannels, connectChannel, disConnectChannel } from "./channels.actions";

export const channelsReducer = handleActions(
  {
    [listChannels]: (state, { payload }) => payload,
    [connectChannel]: produce((draft, { meta: { channel } }) => {
      draft[channel].status = CONNECTED;
    }),
    [disConnectChannel]: produce((draft, { meta: { channel }}) => {
      draft[channel].status = NOT_CONNECTED;
    })
  },
  {}
);