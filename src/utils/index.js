export const isFunc = (v) => typeof v === 'function';
export const assert = (condition, msg) => {
  if (!condition) throw new Error(`[dashboard]${msg}`);
};
export const toThousands = (num) => {
  let number = (num || 0).toString();
  let result = '';

  while (number.length > 3) {
    result = `,${number.slice(-3)}${result}`;

    number = number.slice(0, number.length - 3);
  }

  if (number) {
    result = number + result;
  }
  return result;
};

export const timingFun = (func = () => { }, interval = 1, defaultCall = true) => {
  assert(isFunc(func), `${func} is not function`);
  const m = interval * 60 * 1000;
  if (defaultCall) func();
  const time = window.setInterval(() => {
    func();
  }, m);
  return time;
};

export const isChinese = (str) => {
  if (escape(str).indexOf('%u') < 0) return false;
  return true;
};

export const emoj2str = (str) => {
  return unescape(escape(str).replace(/%uD.{3}/g, ''));
};

export const handleText = (str) => {
  let res = emoj2str(str);
  if (isChinese(res)) {
    res = res.length > 4 ? `${res.slice(0, 6)}...` : res;
  } else {
    res = res.length > 7 ? `${res.slice(0, 7)}...` : res;
  }
  return res;
};

// 根据value返回对象的key 使用方式：findKey(obj)(value)
export const findKey =
  (obj) =>
    (value, compare = (a, b) => a === b) =>
      Object.keys(obj).find((k) => compare(obj[k], value));

// 设置
export const setToken = (key, value) => {
  return localStorage.setItem(key, value);
};
// 获取
export const getToken = (key) => {
  if (!key || key !== 'undefined') {
    return localStorage.getItem(key);
  }
  return false;
};

// 设置session
export const setSession = (k, v) => {
  sessionStorage.setItem(k, v);
};
// 获取session
export const getSession = (k) => {
  return sessionStorage.getItem(k);
};

// 判断是否是微信环境
export const isWechat = () => {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
};

// 设置cookie 带path
export const setCookiePath = (name, value, expires, path, domain, secure) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (expires instanceof Date) {
    cookieText += `; expires=${expires.toGMTString()}`;
  }
  if (path) {
    cookieText += `; path=${path}`;
  }
  if (domain) {
    cookieText += `; domain=${domain}`;
  }
  if (secure) {
    cookieText += '; secure';
  }
  document.cookie = cookieText;
};

// 判断是不是ios
export const isIOS = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
  const isios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isAndroid) {
    return false;
  }
  if (isios) {
    return true;
  }
  return null;
};

// 判断是否是json字符串
export const isJSON = (str) => {
  let flag;
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        flag = true;
      } else {
        flag = false;
      }
    } catch (e) {
      flag = false;
    }
  }
  return flag;
};

// 判断是pc端还是移动端
export const isMobileFlag = () => {
  const ua = navigator.userAgent.toLowerCase();
  const is_mobile =
    ua.match(
      /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i,
    ) != null;
  return is_mobile;
};

// passbackParams
export const JsonPassbackParams = (passbackParams) => {
  let passbackParamsObj = {};
  if (isJSON(passbackParams)) {
    passbackParamsObj = JSON.parse(passbackParams);
  }
  return passbackParamsObj;
};
