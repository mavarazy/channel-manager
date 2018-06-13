import { createAction } from "redux-actions";
import apiFactory from "./apiFactory";

const api = apiFactory("/api/analytics");

export const getYearReport = createAction(
  "ANALYTICS_YEAR_GET",
  async (propertyId, year) => await api.get(`${propertyId}/${year}`),
  (propertyId, year) => ({ propertyId, year })
);

export const getMonthReport = createAction(
  "ANALYTICS_MONTH_GET",
  async (propertyId, year, month) => await api.get(`${propertyId}/${year}/${month}`),
  (propertyId, year, month) => ({ propertyId, year, month })
);