/*
 * @Author: 李韬
 * @Date: 2022-07-27 11:21:17
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-27 11:22:49
 */
export default {
  bind(el, bind) {
    let flag;
    el.addEventListener('click', () => {
      if (!flag) {
        flag = true;
        bind.value();
        setTimeout(() => {
          flag = false;
        }, bind.arg && +bind.arg || 1000);
      }
    }, false);
  },
};
