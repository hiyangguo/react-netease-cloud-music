import createConstants from '../utils/createConstants';

/**
 * @type {{ERROR, REQUEST, SUCCESS, LOADED, FAILURE, LOGOUT, NOT_FOUND, FIELD_INVALID, NOT_LOGGED_IN, NO_ACCESS, EXCEPTION, REDIRECT}}
 */
const ResponseStatus = createConstants(
  'ERROR',
  'REQUEST',
  'SUCCESS',
  'LOADED',
  'FAILURE',
  'LOGOUT',
  'NOT_FOUND',
  'FIELD_INVALID',
  'NOT_LOGGED_IN',
  'NO_ACCESS',
  'EXCEPTION',
  'REDIRECT'
);

export default ResponseStatus;