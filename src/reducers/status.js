import { handleActions } from "redux-actions";
import { produce } from "./produce";
import { getStatus } from "./status.actions";

const statusReducer = handleActions(
  {
    [getStatus]: produce((draft, { payload: status }) => {
      status.forEach(s => draft.push(s));
    }),
  },
  []
);

export default statusReducer;