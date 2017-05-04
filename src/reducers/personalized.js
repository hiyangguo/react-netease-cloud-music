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

export default combineReducers({
  personalizedData: fetchData
});

// selector
export const getList = (state) => {
  return state.personalized.personalizedData
}
