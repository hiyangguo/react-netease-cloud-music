import { API_PERSONALIZED, API_BANNER } from '../constants/API';
import types from '../constants/ActionTypes';
import { createFetchAction, fetchData } from '../utils/fetchUtils';


const fetchDataAction = createFetchAction(types.PERSONALIZED)
const fetchBannerAction = createFetchAction(types.BANNER)

export function fetchPersonalized(params) {
  return fetchData(API_PERSONALIZED, {
    action: fetchDataAction,
    params: params
  });
}

export function fetchBanner(params) {
  return fetchData(API_BANNER, {
    action: fetchBannerAction,
    params: params
  });
}

