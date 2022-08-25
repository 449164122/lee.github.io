/*
 * @Author: 李韬
 * @Date: 2022-07-15 14:50:40
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-19 16:37:46
 */
import search from './src/search.vue';

search.install = (Vue) => {
  Vue.component(search.name, search);
};

export default search;