/*
 * @Author: 李韬
 * @Date: 2022-07-18 16:52:05
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-19 16:34:15
 */
import badge from './src/badge.vue';

badge.install = (Vue) => {
  Vue.component(badge.name, badge);
};

export default badge;