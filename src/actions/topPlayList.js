import { API_TOP_PLAY_LIST } from '../constants/API';
import { createAction } from 'redux-actions';
import types from '../constants/ActionTypes';
import { createFetchAction, fetchData, stringifyJSON } from '../utils/fetchUtils';


const fetchDataAction = createFetchAction(types.TOP_PLAY_LIST)

export function fetchTopPlayList(params) {
  return fetchData(API_TOP_PLAY_LIST, {
    action: fetchDataAction,
    params: Object.assign({
      limit: 10,
      order: 'new'
    }, params)
  });
}