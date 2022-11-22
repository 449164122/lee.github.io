/*
 * @Author: 李韬
 * @Date: 2022-11-22 09:26:00
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 14:35:08
 */
import picker from './src/picker.vue';

picker.install = (Vue) => {
  Vue.component(picker.name, picker)
};

export default picker;