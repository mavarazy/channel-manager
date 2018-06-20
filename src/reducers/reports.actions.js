import { createAction } from "redux-actions";
import { apiFactory } from "./apiFactory";

const api = apiFactory("/api/analytics");

export const getYearReport = createAction(
  "ANALYTICS_YEAR_GET",
  async (listingId, year) => await api.get(`${listingId}/${year}`),
  (listingId, year) => ({ listingId, year })
);

export const getMonthReport = createAction(
  "ANALYTICS_MONTH_GET",
  async (listingId, year, month) => await api.get(`${listingId}/${year}/${month}`),
  (listingId, year, month) => ({ listingId, year, month })
);