import createConstants from '../utils/createConstants';

/**
 * @type {{PERSONALIZED,TOP_PLAY_LIST}}
 */
const ActionTypes = createConstants(
  'TOP_PLAY_LIST',//精选歌单
  'PERSONALIZED',//推荐歌单
);

export default ActionTypes;