import createConstants from '../utils/createConstants';

/**
 * @type {{ERROR, REQUEST, SUCCESS, EXCEPTION}}
 */
const ResponseStatus = createConstants(
  'ERROR',
  'REQUEST',
  'SUCCESS',
  'EXCEPTION'
);

export default ResponseStatus;