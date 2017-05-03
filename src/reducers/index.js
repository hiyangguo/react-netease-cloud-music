/** Libs **/
import { combineReducers } from 'redux';
import playList from './playList'

// 此时的state分为了两部分
export default combineReducers({
  playList
});