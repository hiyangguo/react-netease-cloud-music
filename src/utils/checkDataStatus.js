import status from '../constants/ResponseStatus';

//监测API 返回数据的状态
export default function checkDataStatus(data, dispatch, options = {}) {
  switch (data.status) {
    case status.SUCCESS:
      return true;
    case status.EXCEPTION:
      return false;
    default:
      return false;
  }
}