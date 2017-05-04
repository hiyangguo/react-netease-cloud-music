import { API_PERSONALIZED } from '../constants/API';
import types from '../constants/ActionTypes';
import { createFetchAction, fetchData } from '../utils/fetchUtils';


const fetchDataAction = createFetchAction(types.PERSONALIZED)

export function fetchPersonalized(params) {
  return fetchData(API_PERSONALIZED, {
    action: fetchDataAction,
    params: params
  });
}