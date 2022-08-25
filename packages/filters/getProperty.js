/**
 * 获取对象属性，支持深层获取和数组获取
 * @param source {Object} 取值来源
 * @param path {String} 要获取的对象属性
 * @param defaultValue {Object} 当获取到的值为 null, undefined 时，默认值才生效
 * @return {String} 返回获取到的值
 * Examples
    var obj = {
      a: '234',
      b: {
          b1: 2301,
          b2: true,
          b3: new Date()
      },
      c: ['Andy', 2020, true, false, undefined, null, ' - ', { cc: { ccc: '中兴新云' } }, [ '888' ]]
    }

    getProperty(obj, ['c', 7, 'cc', 'ccc']);    // 中兴新云
    getProperty(obj, 'c.7.cc.ccc', '默认值');   // 中兴新云
    getProperty(obj, 'c.5');                    // null
    getProperty(obj, ['c', '3']);               // false
    getProperty(obj, ['c', 8, 0]);              // 888
    getProperty(obj, 'c.8.0');                  // 888
*/
export default function (source, path, defaultValue) {
  if (!Array.isArray(path)) {
    path = path.split('.');
  }
  const length = path.length;
  if (!length) {
    return defaultValue;
  }
  for (let i = 0; i < length; i++) {
    let field = source == null ? undefined : source[path[i]];
    if (field == null) {
      field = defaultValue;
      // 终止后续循环
      i = length;
    }
    source = field;
  }
  return source;
}
