import axios from 'axios';
import { HTTP_STATUS_MESSAGE } from '../consts/statusCode';

axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.isCustomHeaders = true; // 是否拦截器重置请求头

axios.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (config.isCustomHeaders) {
      newConfig.headers.Authorization = 'token';
    }
    return newConfig;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 中间件 拦截请求-
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    const statusMsg = HTTP_STATUS_MESSAGE[res.status];
    if (statusMsg) {
      // console.error(statusMsg);
    }
    Promise.reject(err);
  },
);

const safeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      ...options,
      url,
    }).then(
      (res) => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      (err) => {
        reject(err);
      },
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = (url, data, opts = {}) => {
  return safeRequest(url, {
    params: data,
    ...opts,
    method: 'GET',
  });
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = (url, data, opts = {}) => {
  return safeRequest(url, { data, ...opts, method: 'POST' });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = (url, data, opts = {}) => {
  return safeRequest(url, { data, ...opts, method: 'PUT' });
};

export default {
  get,
  post,
  put,
};
