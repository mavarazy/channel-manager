import { handleActions, combineActions } from "redux-actions";
import { produce } from "./produce";
import { getYearReport, getMonthReport } from "./reports.actions";

const listingReportsReducers = handleActions(
  {
    [getYearReport]: produce((draft, { payload: report, meta: { year }}) => {
      draft[year] = Object.assign(draft[year] || { months: {} }, report);
    }),
    [getMonthReport]: produce((draft, { payload: report, meta: { year, month }}) => {
      draft[year] = draft[year] || { months: {} };
      draft[year].months[month] = report;
    })
  },
  {
    months: {}
  }
);

const reportsReducer = handleActions(
  {
    [combineActions(getYearReport, getMonthReport)]: produce((draft, action) => {
      const { meta: { listingId } } = action;
      draft[listingId] = listingReportsReducers(draft[listingId], action);
    }),
  },
  {}
);

export default reportsReducer;