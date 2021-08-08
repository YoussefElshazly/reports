import axios from 'axios';

import { actionTypes } from '../../constants';

export const read = (queries) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.loader.ADD_ACTION,
      payload: actionTypes.report.ADMIN_READ,
    });

    const res = await axios.get(`/api/v1/reports?${queries ? `&${queries}` : ''}`);

    dispatch({
      type: actionTypes.report.ADMIN_READ_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.report.ADMIN_READ_FAILURE,
    });

    throw error.response.data;
  } finally {
    dispatch({
      type: actionTypes.loader.REMOVE_ACTION,
      payload: actionTypes.report.ADMIN_READ,
    });
  }
};

export const updateById = (id, report) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(report);

    dispatch({
      type: actionTypes.loader.ADD_ACTION,
      payload: actionTypes.report.ADMIN_UPDATE_BY_ID,
    });

    const res = await axios.put(`/api/v1/reports/${id}`, body, config);

    dispatch({
      type: actionTypes.report.ADMIN_UPDATE_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.report.ADMIN_UPDATE_BY_ID_FAILURE,
    });

    throw error.response.data;
  } finally {
    dispatch({
      type: actionTypes.loader.REMOVE_ACTION,
      payload: actionTypes.report.ADMIN_UPDATE_BY_ID,
    });
  }
};
