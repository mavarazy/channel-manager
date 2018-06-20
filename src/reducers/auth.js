import { combineActions, handleActions } from "redux-actions";
import { login, logout, register } from "./auth.actions";
import { saveToken, clearToken, restoreState } from "./apiFactory";
import { produce } from "./produce";

const INITIAL_STATE = {
  isAuthenticated: false
};

export const authReducer = handleActions(
  {
    [combineActions(login, register)]: produce((authDraft, { payload }) => {
      Object.assign(authDraft, payload);
      authDraft.isAuthenticated = true;
      saveToken(payload);
    }),
    [logout]: () => {
      clearToken();
      return INITIAL_STATE;
    }
  },
  restoreState()
);