import { combineReducers } from 'redux';
import types from '../constants/ActionTypes';

export function fetchData(state = [], action) {
  switch (action.type) {
    case types.TOP_PLAY_LIST: {
      console.log(action);
      return action
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  items: fetchData,
});

// selector
export const getState = (state) => {
  return state.playList
}
