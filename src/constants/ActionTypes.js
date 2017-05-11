import createConstants from '../utils/createConstants';

/**
 * @type {{BANNER,PERSONALIZED,TOP_PLAY_LIST}}
 */
const ActionTypes = createConstants(
  'TOP_PLAY_LIST',//精选歌单
  'PERSONALIZED',//推荐歌单
  'BANNER',//首页轮播
);

export default ActionTypes;