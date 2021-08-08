import { actionTypes } from '../../constants';

const initialState = {
  reports: [],
  report: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.report.ADMIN_READ_SUCCESS:
      return {
        ...state,
        reports: payload,
      };

    case actionTypes.report.ADMIN_UPDATE_BY_ID_SUCCESS:
      const reports = [...state.reports];

      reports[state.reports.findIndex((report) => report._id === payload._id.toString())] = payload;

      return {
        ...state,
        report: payload,
        reports,
      };

    case actionTypes.report.ADMIN_READ_FAILURE:
    case actionTypes.report.ADMIN_UPDATE_BY_ID_FAILURE:
    default:
      return state;
  }
};
