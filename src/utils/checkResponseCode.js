import status from '../constants/ResponseStatus';

/**
 * 检验后端服务端返回的数据
 */
export default function checkResponseCode(response) {
  const { code, ...data } = response;
  switch (response.code) {
    case 200:
    case '200':
      return {
        status: status.SUCCESS,
        ...data
      };
    default:
      return {
        status: status.EXCEPTION,
        ...data
      }
  }
}