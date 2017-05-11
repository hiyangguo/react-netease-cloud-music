import { combineReducers } from 'redux';
import types from '../constants/ActionTypes';

const initState = {
  result: []
}

export function fetchData(state = initState, action) {
  switch (action.type) {
    case types.PERSONALIZED: {
      const { status } = action;
      const { result = [] } = action.response;
      return {
        status,
        result
      };
    }
    default: {
      return state;
    }
  }
}

export function fetchBanner(state = initState, action) {
  switch (action.type) {
    case types.BANNER: {
      const { status } = action;
      const { banners = [] } = action.response;
      return {
        status,
        banners
      };
    }
    default: {
      return state;
    }
  }
}


export default combineReducers({
  personalizedData: fetchData,
  bannerData: fetchBanner
});

// selector
export const getList = (state) => {
  return state.personalized.personalizedData
}

export const getBanner = (state) => {
  return state.personalized.bannerData
}
