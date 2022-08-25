/*
 * @Author: 李韬
 * @Date: 2022-07-27 09:44:35
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-27 11:06:26
 */

export default {
  bind(el, bind) {
    let timer;
    el.addEventListener('click', () => {
      if (timer) clearTimeout(timer);
      const doNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, bind.arg && +bind.arg || 1000);
      if (doNow) {
        bind.value();
      }
    }, false);
  },
};
