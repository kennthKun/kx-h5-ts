// 设置url挂载参数
export const setUrlQuery = (options) => {
  let { url, query } = options;
  if (!url) return '';
  if (query) {
    let queryArr = [];
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        queryArr.push(`${key}=${query[key]}`);
      }
    }
    if (url.indexOf('?') !== -1) {
      url = `${url}&${queryArr.join('&')}`;
    } else {
      url = `${url}?${queryArr.join('&')}`;
    }
  }
  return url;
};


/**
 * @fn 获取query参数-
 * @param  {string} name
 * @param  {string} url
 */

export const GetUrlQuery = (name, url) => {
  const { href } = document.location;
  let getUrl = url;
  if (!name || typeof name !== 'string') return '';
  if (!url) getUrl = href;
  const mat = new RegExp(`(^|[?&])${name}=(.*?)(&|#|$)`, 'i').exec(getUrl);
  if (mat && mat.length >= 2) return decodeURIComponent(mat[2]);
  return '';
};

/**
 * 获取url参数数据，返回obj对象
 */
export const getUrlToJson = (url) => {
  try {
    const strUrl = url || window?.location?.href || '';
    let temp1 = strUrl.split('?');
    let [, pram] = temp1;
    if (pram === 'undefined' || !pram) {
      return {};
    }
    let keyValue = pram.split('&');
    let obj = {};
    for (let i = 0; i < keyValue.length; i++) {
      let item = keyValue[i].split('=');
      let [key, value] = item;
      obj[key] = value;
    }
    return obj;
  } catch (error) {
    return {};
  }
};

// 删除url挂载参数
export const delUrlParams = (url, name) => {
  //根据#号拆分
  let poundArr = url.split('#');
  //？拆分
  let questionArr = [];
  if (poundArr) {
    // 把#接上
    poundArr.forEach((element, index) => {
      let param = index > 0 ? `#${element}` : element;
      let tempArr = param.split('?');
      if (!tempArr) {
        return true;
      }
      tempArr.forEach((item, idx) => {
        // 保留问号
        questionArr.push(idx > 0 ? `?${item}` : item);
      });
    });
  } else {
    questionArr = url.split('?');
    // fixme: wuhaoran 无效方法
    // if (questionArr) {
    //   questionArr.forEach((item, idx) => {
    //     if (idx > 0) {
    //       item = '?' + item;
    //     }
    //   });
    // }
  }

  if (!questionArr) {
    return url;
  }

  //&符号的处理
  let andArr = [];
  questionArr.forEach((item, index) => {
    let andIdx = item.indexOf('&');
    if (andIdx <= -1) {
      andArr.push(item);
      return true;
    }

    let tempAndArr = item.split('&');
    tempAndArr.forEach((ele, idx) => {
      andArr.push(idx > 0 ? `&${ele}` : ele);
    });
  });

  let newUrl = '';
  andArr.forEach((item) => {
    let nameIndex = item.indexOf(name + '=');
    //不拼接要删除的参数
    if (nameIndex > -1) {
      //保留第一个问号
      let questionIdx = item.indexOf('?');
      if (questionIdx === 0) {
        newUrl += '?';
      }
      return true;
    }
    newUrl += item;
  });

  // fixme: wuhaoran \& -> &
  return newUrl.replace(/\?&/g, '?');
};
