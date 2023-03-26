export const HTTP_STATUS = {
  SUCCESS: 200,
  NOT_MODIFIED: 304,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const COMMON_STATUS = {
  CLIENT_ERROR: -40000,
  NOT_FOUND: -40400, // "请求资源不存在",
  API_NOT_FOUND: -40401, // "请求方法不存在",
  EXCEPTION: -50000, // "系统异常",
  PARAM_ERROR: -40001, // "参数错误",
  AUTH_FAILED: -40100, // "认证错误",
  NO_PERMISION: -40302, // "没有权限",
  NET_REQUEST_FAILED: -18939904, // "网络请求失败"
};

// 错误提示消息
export const HTTP_STATUS_MESSAGE = {
  400: '400/404 接口请求失败，请重试！如有疑问，联系管理员。',
  401: '需要登陆授权',
  403: '抱歉！你暂无权限操作此功能',
  404: '400/404 接口请求失败，请重试！如有疑问，联系管理员。',
  500: '500服务端错误，请稍后重试！',
  502: '500服务端错误，请稍后重试！',
  503: '500服务端错误，请稍后重试！',
};
