/** Libs **/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from '../reducers' ;

const middleware = [thunk];
// 不需要此中间件
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(logger);
// }
export  function getStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )
}