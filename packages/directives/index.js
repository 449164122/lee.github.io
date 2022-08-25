/*
 * @Author: 李韬
 * @Date: 2022-07-27 11:35:41
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-11 09:40:59
 */

import { watermark } from './watermark';
import debounce from './debounce';
import throttle from './throttle';
import detail from './detail';

export default {
  install(Vue) {
    Vue.directive('watermark', watermark);
    Vue.directive('debounce', debounce); // 节流
    Vue.directive('throttle', throttle); // 防抖
    Vue.directive('detail', detail); // 防抖
  },
};
