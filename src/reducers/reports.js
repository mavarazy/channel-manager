import { handleActions, combineActions } from "redux-actions";
import { produce } from "./produce";
import { getYearReport, getMonthReport } from "./reports.actions";

const propertyReportsReducers = handleActions(
  {
    [getYearReport]: produce((draft, { payload: report, meta: { year }}) => {
      draft[year] = Object.assign(draft[year] || {}, report);
    })
  },
  {}
);

const reportsReducer = handleActions(
  {
    [combineActions(getYearReport, getMonthReport)]: produce((draft, action) => {
      const { meta: { propertyId } } = action;
      draft[propertyId] = propertyReportsReducers(draft[propertyId], action);
    }),
  },
  {}
);

export default reportsReducer;