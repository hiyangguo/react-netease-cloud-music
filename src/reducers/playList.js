import { combineReducers } from 'redux';
import types from '../constants/ActionTypes';

const initState = {
  playlists: [],
  total: 0
}

export function fetchData(state = initState, action) {
  switch (action.type) {
    case types.TOP_PLAY_LIST: {
      const { status } = action;
      const { playlists = [], total = 0 } = action.response;
      return {
        status,
        playlists,
        total
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  topPlayListData: fetchData,
});

// selector
export const getList = (state) => {
  return state.playList.topPlayListData
}
