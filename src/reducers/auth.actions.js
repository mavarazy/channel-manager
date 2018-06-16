import { createAction } from "redux-actions";
import { apiFactory, clearToken, restoreState }  from "./apiFactory";

const api = apiFactory("/api/auth");

export const login = createAction(
  "AUTH_LOG_IN",
  async (credentials) => await api.post("/login", credentials)
);

export const register = createAction(
  "AUTH_REGISTER",
  async (regForm) => api.post("/register", regForm)
);

export const restore = createAction(
  "AUTH_RESTORE",
  () => (restoreState())
);

export const logout = createAction(
  "AUTH_LOGOUT",
  async () => {
    clearToken();
    return ({})
  }
);

