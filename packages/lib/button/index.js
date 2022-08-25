/*
 * @Author: 李韬
 * @Date: 2022-07-18 11:07:45
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-19 16:37:39
 */
import button from './src/button.vue';

button.install = (Vue) => {
  Vue.component(button.name, button)
};

export default button;