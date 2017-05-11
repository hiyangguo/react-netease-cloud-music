/** Libs **/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from '../reducers' ;

const middleware = [thunk];
export  function getStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )
}