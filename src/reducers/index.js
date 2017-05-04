/** Libs **/
import { combineReducers } from 'redux';
import playList from './playList';
import personalized from './personalized';

export default combineReducers({
  playList,
  personalized
});