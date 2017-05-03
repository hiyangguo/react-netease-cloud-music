import fetch from 'isomorphic-fetch';
import fetchJsonp from './fetchJsonp';
import status from '../constants/ResponseStatus';

export function checkHttpStatus(response) {

  //jsonp 请求
  if (!response.status) {
    return response;
  }

  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}


export function parseJSON(response) {
  return response.json();
}


export function stringifyJSON(data) {
  return JSON.stringify({ data: data });
}


export function fetchJson(url, options = {}) {
  const defaultOptions = {
    method: 'get',

    //Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  let args = { ...options }; // copy options


  // insert params into URL
  if (typeof url === 'object') {
    let keys = url.getKeys();
    url = url.toStringURL(args.params);
    keys.forEach(key => delete args.params[key]);
  }


  // work with URL query params
  const esc = encodeURIComponent;
  if (args.params) {
    const params = args.params;
    const paramArray = [];
    for (let key in params) {
      if (!params[key]) {
        continue;
      }
      if (Array.isArray(params[key])) {
        params[key].map((value) => {
          value && paramArray.push(`${esc(key)}=${esc(value)}`);
        });
        continue;
      }
      paramArray.push(`${esc(key)}=${esc(params[key])}`);
    }
    delete args.params;
    url += ((url.indexOf('?') === -1) ? '?' : '&') + paramArray.join('&');
  }
  return fetch(url, Object.assign({}, defaultOptions, args));
}


/**
 * 创建异步获取数据的 3个Action: request, failure, success
 * @param  {String} ACTION
 * @param  {Bool} noWait=false  不允许等待, 如果设置为true就不返回request这个action
 * @param  {Object} actionProps={}
 */
export function createFetchAction(ACTION, noWait = false, options = {}) {

  const request = options.request || function (actionProps) {
      return {
        type: ACTION,
        status: status.REQUEST,
        response: {}, ...actionProps
      };
    };

  const failure = options.failure || function (error, actionProps) {
      return {
        type: ACTION,
        status: status.ERROR,
        error: error,
        response: {}, ...actionProps
      };
    };

  const success = options.success || function (data, actionProps) {
      return {
        type: ACTION,
        status: status.SUCCESS,
        response: data, ...actionProps
      };
    };


  //如果不允许等待
  if (noWait) {
    return {
      failure,
      success
    };
  }

  return {
    request,
    failure,
    success
  };
}

function actionCreatorWrapper(fn, dispatch) {
  return (...args) => {
    if (!fn || !dispatch) return;
    let action = fn(...args);
    if (action && action.type) dispatch(action);
  };
}

export function fetchData(url, options, cb) {

  const {
    actionProps,
    action = {},
    beforeSend,
    success,
    complete,
    error,
    query = {},
    type, ...fetchOptions
  } = options;

  const fetchFunc = type === 'jsonp' ? fetchJsonp : fetchJson;

  return (dispatch) => {

    const beforeSendCallback = actionCreatorWrapper(beforeSend, dispatch);
    const successCallback = actionCreatorWrapper(success, dispatch);
    const completeCallback = actionCreatorWrapper(complete, dispatch);

    action.request && dispatch(action.request(actionProps));
    beforeSendCallback(dispatch);
    return fetchFunc(url, fetchOptions)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((data) => {

        const response = data;
        if (data) {
          if (action.success) {
            const successAction = action.success(response, actionProps);
            dispatch(successAction);
          }
          successCallback(response, dispatch);
        } else {
          action.failure && dispatch(action.failure('fetch error', actionProps));
        }

        completeCallback(response, dispatch);
        return data;
      }).then(cb);
  };

}
